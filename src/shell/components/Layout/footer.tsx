// import * as React from 'react';
// import {AppBar} from 'material-ui';

// interface IFooterProps  {
//   className?: string;
//   style?: React.CSSProperties;
// }

// /**
//  * The footer component
//  *
//  * @class Footer
//  * @extends {React.Component<IFooterProps, {}>}
//  */
// class Footer extends React.Component < IFooterProps, {} > {
//   public render() {

//     const {style} = this.props;
//     const localStyle = {
//       appBar: {
//         position: 'fixed',
//         bottom: 0,
//         left: 0,
//         overflow: 'hidden',
//         maxHeight: 20,
//         width: '100%',
//         backgroundColor: '#581001',
//         zIndex: -1,
//       },
//       titleStyle: {
//         fontSize: 10,
//         lineHeight: '20px',
//         marginLeft: 5,
//       },
//     };

//     return (
//       <AppBar style={{...style, ...localStyle.appBar}} showMenuIconButton={false}
//               title="Copyright ®" titleStyle={localStyle.titleStyle} />
//     );
//   }
// }

// export {Footer};
