import * as React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert
} from 'reactstrap';
import { ApplicationState } from '../../data';
import Dropzone from 'react-dropzone';
import Cropper from 'react-cropper';
import { Dispatch } from 'redux';
import { userActions, UserProfileModel, UserInfoForm, User as UserModel } from '../../users';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionDispatcher, apiSettings } from '../../shared';
import { User } from 'oidc-client';

// tslint:disable:jsx-no-multiline-js

/**
 * The props type of UserProfile container
 *
 * @export
 * @interface UserProfileProps
 */
interface UserProfileProps extends RouteComponentProps<any> {
  profile: UserProfileModel;
  user: User;
  userForm: UserModel;
  setPhotoAction: (model: { photo: string }) => any;
  updatePhotoAction: (model: UserProfileModel) => any;
  getUserEmailAction: (model: { accessToken: string }) => any;
  changeEmailAction: (model: UserModel) => any;
}

/**
 * The state type of UserProfile container
 *
 * @interface UserProfileState
 */
interface UserProfileState {
  openDropModal: boolean;
  hasImage: boolean;
  errorMessage?: string;
}

/**
 * The profile react component
 *
 * @class UserProfile
 * @extends {React.Component<UserProfileProps, UserProfileState>}
 */
class UserProfile extends React.PureComponent<UserProfileProps, UserProfileState> {
  public cropper;

  public state: UserProfileState = {
    openDropModal: false,
    hasImage: true
  };

  public componentDidMount() {
    const { getUserEmailAction, user } = this.props;

    getUserEmailAction({ accessToken: user ? user.access_token : '' });
  }

  public render() {
    const { profile, user, userForm } = this.props;
    const { hasImage } = this.state;
    const userDefaultPicture = require('../../images/user.png');

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Profile : <b>Nom du profile</b>
              </CardHeader>
              <CardBody className="card-body">
                <Row>
                  <Col className="d-flex d-flex align-items-center flex-column" md={4}>
                    <Dropzone
                      className="dropzone"
                      onDrop={this.onDrop}
                      accept="image/*"
                      multiple={false}
                      maxSize={1300000}
                    >
                      <div className="text-dropzone d-flex justify-content-center align-items-center">
                        <b>Changer de photo</b>
                      </div>
                      {hasImage &&
                        user && (
                          <img
                            src={`${apiSettings.baseUrl}v1/aspnetusers/photo/${user.profile.sub}`}
                            className="img-fluid"
                            style={{ height: 200 }}
                            onError={this.handleImgError}
                          />
                        )}
                      {!hasImage &&
                        user && <img src={userDefaultPicture} className="img-fluid" style={{ height: 200 }} />}
                    </Dropzone>
                    {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
                  </Col>

                  <Col md={8}>
                    <h4>Information du compte</h4>
                    <UserInfoForm onSubmit={this.handleUpdateEmail} initialValues={{ ...userForm }} />

                    <hr />
                    <h4>Mot de passe</h4>
                    <a href={`${apiSettings.baseUrl}/Account/ForgotPassword`} className="px-0">
                      Mot de pass oublié ?
                    </a>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.openDropModal} toggle={this.handleToggleDropModal}>
          <ModalHeader toggle={this.handleToggleDropModal}>Télécharger une photo</ModalHeader>
          <ModalBody>
            <Cropper
              ref={cropper => {
                this.cropper = cropper;
              }}
              src={profile.photo}
              style={{ height: 300, width: '100%' }}
              aspectRatio={1 / 1}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onCropPhoto}>
              Valider
            </Button>&nbsp;
            <Button color="secondary" onClick={this.handleToggleDropModal}>
              Annuler
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  private handleImgError = () => {
    this.setState({ hasImage: false });
  };

  private handleUpdateEmail = (values: UserModel) => {
    const { changeEmailAction, user } = this.props;
    changeEmailAction({ ...values, accessToken: user ? user.access_token : '' });
  };

  //#region Upload photo

  private onDrop = (acceptedFiles: any[], rejectedFiles: any[]) => {
    const { setPhotoAction } = this.props;
    const reader = new FileReader();

    if (Array.isArray(rejectedFiles) && rejectedFiles.length > 0) {
      if (rejectedFiles[0].size > 1300000) {
        this.setState({
          // tslint:disable-next-line:quotemark
          errorMessage: "La taille de l'image ne doit pas dépasser 1 Mo."
        });
      }
      if (rejectedFiles[0].type.indexOf('image') < 0) {
        this.setState({
          errorMessage: 'Vous devez sélectionner une photo.'
        });
      }
      return;
    }

    this.setState({
      errorMessage: undefined
    });

    reader.onload = () => {
      setPhotoAction({ photo: reader.result });
      this.setState({
        openDropModal: true
      });
    };

    reader.readAsDataURL(acceptedFiles[0]);
  };

  private onCropPhoto = () => {
    const { updatePhotoAction, user } = this.props;

    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }

    const croppedPhoto = this.cropper.getCroppedCanvas().toDataURL();

    updatePhotoAction({
      id: user.profile.sub,
      photo: croppedPhoto,
      accessToken: user.access_token
    });

    this.setState({ openDropModal: false });
  };

  private handleToggleDropModal = () => {
    this.setState({ openDropModal: !this.state.openDropModal });
  };
}

//#endregion

const mapStateToProps = (state: ApplicationState) => {
  return {
    profile: state.profile,
    user: state.oidc.user,
    userForm: state.userForm
  };
};

const mapDispatchToProps = (dispatch: Dispatch<UserProfileModel>) => {
  const dispatcher = new ActionDispatcher(dispatch);
  return {
    setPhotoAction: dispatcher.dispatchAction.bind(dispatcher, userActions.uploadPhoto),
    updatePhotoAction: dispatcher.dispatchAsyncAction.bind(dispatcher, userActions.updatePhotoAsync),
    getUserEmailAction: dispatcher.dispatchAsyncAction.bind(dispatcher, userActions.getUserEmailAsync),
    changeEmailAction: dispatcher.dispatchAsyncAction.bind(dispatcher, userActions.changeEmailAsync)
  };
};

const userProfile = withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));

export { userProfile as UserProfile };
