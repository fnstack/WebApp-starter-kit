export type Maybe<T> = T | null;

export interface ScheduleEntryFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<ScheduleEntryFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ScheduleEntryFilter[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  conference?: Maybe<ConferenceFilter>;
}

export interface ConferenceFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<ConferenceFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ConferenceFilter[]>;

  dateEnd?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateEnd_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateEnd_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateEnd_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateEnd_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateEnd_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateEnd_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateEnd_gte?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateStart_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateStart_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateStart_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateStart_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateStart_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateStart_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateStart_gte?: Maybe<DateTime>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  edition?: Maybe<Edition>;
  /** All values that are not equal to given value. */
  edition_not?: Maybe<Edition>;
  /** All values that are contained in given list. */
  edition_in?: Maybe<Edition[]>;
  /** All values that are not contained in given list. */
  edition_not_in?: Maybe<Edition[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  location?: Maybe<string>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<string>;
  /** All values that are contained in given list. */
  location_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  location_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  location_lte?: Maybe<string>;
  /** All values greater than the given value. */
  location_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  location_gte?: Maybe<string>;
  /** All values containing the given string. */
  location_contains?: Maybe<string>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  location_not_ends_with?: Maybe<string>;

  locationUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  locationUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  locationUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  locationUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  locationUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  locationUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  locationUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  locationUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  locationUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  locationUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  locationUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  locationUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  locationUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  locationUrl_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  scheduleUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  scheduleUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  scheduleUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  scheduleUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  scheduleUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  scheduleUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  scheduleUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  scheduleUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  scheduleUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  scheduleUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  scheduleUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  scheduleUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  scheduleUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  scheduleUrl_not_ends_with?: Maybe<string>;

  shortDescription?: Maybe<string>;
  /** All values that are not equal to given value. */
  shortDescription_not?: Maybe<string>;
  /** All values that are contained in given list. */
  shortDescription_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  shortDescription_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  shortDescription_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  shortDescription_lte?: Maybe<string>;
  /** All values greater than the given value. */
  shortDescription_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  shortDescription_gte?: Maybe<string>;
  /** All values containing the given string. */
  shortDescription_contains?: Maybe<string>;
  /** All values not containing the given string. */
  shortDescription_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  shortDescription_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  shortDescription_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  shortDescription_not_ends_with?: Maybe<string>;

  speakersUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  speakersUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  speakersUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  speakersUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  speakersUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  speakersUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  speakersUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  speakersUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  speakersUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  speakersUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  speakersUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  speakersUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  speakersUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  speakersUrl_not_ends_with?: Maybe<string>;

  sponsorEmail?: Maybe<string>;
  /** All values that are not equal to given value. */
  sponsorEmail_not?: Maybe<string>;
  /** All values that are contained in given list. */
  sponsorEmail_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  sponsorEmail_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  sponsorEmail_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  sponsorEmail_lte?: Maybe<string>;
  /** All values greater than the given value. */
  sponsorEmail_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  sponsorEmail_gte?: Maybe<string>;
  /** All values containing the given string. */
  sponsorEmail_contains?: Maybe<string>;
  /** All values not containing the given string. */
  sponsorEmail_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  sponsorEmail_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  sponsorEmail_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  sponsorEmail_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  sponsorEmail_not_ends_with?: Maybe<string>;

  sponsorsUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  sponsorsUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  sponsorsUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  sponsorsUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  sponsorsUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  sponsorsUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  sponsorsUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  sponsorsUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  sponsorsUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  sponsorsUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  sponsorsUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  sponsorsUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  sponsorsUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  sponsorsUrl_not_ends_with?: Maybe<string>;

  supportEmail?: Maybe<string>;
  /** All values that are not equal to given value. */
  supportEmail_not?: Maybe<string>;
  /** All values that are contained in given list. */
  supportEmail_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  supportEmail_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  supportEmail_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  supportEmail_lte?: Maybe<string>;
  /** All values greater than the given value. */
  supportEmail_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  supportEmail_gte?: Maybe<string>;
  /** All values containing the given string. */
  supportEmail_contains?: Maybe<string>;
  /** All values not containing the given string. */
  supportEmail_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  supportEmail_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  supportEmail_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  supportEmail_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  supportEmail_not_ends_with?: Maybe<string>;

  tagLine?: Maybe<string>;
  /** All values that are not equal to given value. */
  tagLine_not?: Maybe<string>;
  /** All values that are contained in given list. */
  tagLine_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  tagLine_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  tagLine_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  tagLine_lte?: Maybe<string>;
  /** All values greater than the given value. */
  tagLine_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  tagLine_gte?: Maybe<string>;
  /** All values containing the given string. */
  tagLine_contains?: Maybe<string>;
  /** All values not containing the given string. */
  tagLine_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  tagLine_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  tagLine_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  tagLine_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  tagLine_not_ends_with?: Maybe<string>;

  teamUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  teamUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  teamUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  teamUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  teamUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  teamUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  teamUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  teamUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  teamUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  teamUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  teamUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  teamUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  teamUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  teamUrl_not_ends_with?: Maybe<string>;

  ticketsUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  ticketsUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  ticketsUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  ticketsUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  ticketsUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  ticketsUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  ticketsUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  ticketsUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  ticketsUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  ticketsUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  ticketsUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  ticketsUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  ticketsUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  ticketsUrl_not_ends_with?: Maybe<string>;

  url?: Maybe<string>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<string>;
  /** All values containing the given string. */
  url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<string>;

  videosUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  videosUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  videosUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  videosUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  videosUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  videosUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  videosUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  videosUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  videosUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  videosUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  videosUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  videosUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  videosUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  videosUrl_not_ends_with?: Maybe<string>;

  year?: Maybe<number>;
  /** All values that are not equal to given value. */
  year_not?: Maybe<number>;
  /** All values that are contained in given list. */
  year_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  year_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  year_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  year_lte?: Maybe<number>;
  /** All values greater than the given value. */
  year_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  year_gte?: Maybe<number>;

  schedule_every?: Maybe<ScheduleEntryFilter>;

  schedule_some?: Maybe<ScheduleEntryFilter>;

  schedule_none?: Maybe<ScheduleEntryFilter>;

  speakers_every?: Maybe<SpeakerFilter>;

  speakers_some?: Maybe<SpeakerFilter>;

  speakers_none?: Maybe<SpeakerFilter>;

  sponsors_every?: Maybe<SponsorFilter>;

  sponsors_some?: Maybe<SponsorFilter>;

  sponsors_none?: Maybe<SponsorFilter>;

  talks_every?: Maybe<TalkFilter>;

  talks_some?: Maybe<TalkFilter>;

  talks_none?: Maybe<TalkFilter>;

  team_every?: Maybe<TeamMemberFilter>;

  team_some?: Maybe<TeamMemberFilter>;

  team_none?: Maybe<TeamMemberFilter>;

  tickets_every?: Maybe<TicketFilter>;

  tickets_some?: Maybe<TicketFilter>;

  tickets_none?: Maybe<TicketFilter>;

  venue?: Maybe<VenueFilter>;
}

export interface SpeakerFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<SpeakerFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<SpeakerFilter[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  conference?: Maybe<ConferenceFilter>;

  talk?: Maybe<TalkFilter>;
}

export interface TalkFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<TalkFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<TalkFilter[]>;

  cardUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  cardUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  cardUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  cardUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  cardUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  cardUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  cardUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  cardUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  cardUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  cardUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  cardUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  cardUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  cardUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  cardUrl_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  duration?: Maybe<number>;
  /** All values that are not equal to given value. */
  duration_not?: Maybe<number>;
  /** All values that are contained in given list. */
  duration_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  duration_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  duration_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  duration_lte?: Maybe<number>;
  /** All values greater than the given value. */
  duration_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  duration_gte?: Maybe<number>;

  endTime?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  endTime_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  endTime_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  endTime_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  endTime_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  endTime_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  endTime_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  endTime_gte?: Maybe<DateTime>;

  entryType?: Maybe<ScheduleEntryType>;
  /** All values that are not equal to given value. */
  entryType_not?: Maybe<ScheduleEntryType>;
  /** All values that are contained in given list. */
  entryType_in?: Maybe<ScheduleEntryType[]>;
  /** All values that are not contained in given list. */
  entryType_not_in?: Maybe<ScheduleEntryType[]>;

  format?: Maybe<TalkFormat>;
  /** All values that are not equal to given value. */
  format_not?: Maybe<TalkFormat>;
  /** All values that are contained in given list. */
  format_in?: Maybe<TalkFormat[]>;
  /** All values that are not contained in given list. */
  format_not_in?: Maybe<TalkFormat[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  slidesUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  slidesUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  slidesUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  slidesUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  slidesUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  slidesUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  slidesUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  slidesUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  slidesUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  slidesUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  slidesUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  slidesUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  slidesUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  slidesUrl_not_ends_with?: Maybe<string>;

  startTime?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  startTime_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  startTime_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  startTime_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  startTime_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  startTime_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  startTime_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  startTime_gte?: Maybe<DateTime>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  url?: Maybe<string>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<string>;
  /** All values containing the given string. */
  url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<string>;

  videoUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  videoUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  videoUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  videoUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  videoUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  videoUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  videoUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  videoUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  videoUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  videoUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  videoUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  videoUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  videoUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  videoUrl_not_ends_with?: Maybe<string>;

  conference?: Maybe<ConferenceFilter>;

  speakers_every?: Maybe<SpeakerFilter>;

  speakers_some?: Maybe<SpeakerFilter>;

  speakers_none?: Maybe<SpeakerFilter>;
}

export interface SponsorFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<SponsorFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<SponsorFilter[]>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  github?: Maybe<string>;
  /** All values that are not equal to given value. */
  github_not?: Maybe<string>;
  /** All values that are contained in given list. */
  github_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  github_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  github_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  github_lte?: Maybe<string>;
  /** All values greater than the given value. */
  github_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  github_gte?: Maybe<string>;
  /** All values containing the given string. */
  github_contains?: Maybe<string>;
  /** All values not containing the given string. */
  github_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  github_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  github_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  github_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  github_not_ends_with?: Maybe<string>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  logoUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  logoUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  logoUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  logoUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  logoUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  logoUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  logoUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  logoUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  logoUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  logoUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  logoUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  logoUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  logoUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  logoUrl_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  sponsorType?: Maybe<SponsorType>;
  /** All values that are not equal to given value. */
  sponsorType_not?: Maybe<SponsorType>;
  /** All values that are contained in given list. */
  sponsorType_in?: Maybe<SponsorType[]>;
  /** All values that are not contained in given list. */
  sponsorType_not_in?: Maybe<SponsorType[]>;

  twitter?: Maybe<string>;
  /** All values that are not equal to given value. */
  twitter_not?: Maybe<string>;
  /** All values that are contained in given list. */
  twitter_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  twitter_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  twitter_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  twitter_lte?: Maybe<string>;
  /** All values greater than the given value. */
  twitter_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  twitter_gte?: Maybe<string>;
  /** All values containing the given string. */
  twitter_contains?: Maybe<string>;
  /** All values not containing the given string. */
  twitter_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  twitter_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  twitter_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  twitter_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  twitter_not_ends_with?: Maybe<string>;

  url?: Maybe<string>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<string>;
  /** All values containing the given string. */
  url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<string>;

  conference?: Maybe<ConferenceFilter>;
}

export interface TeamMemberFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<TeamMemberFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<TeamMemberFilter[]>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  github?: Maybe<string>;
  /** All values that are not equal to given value. */
  github_not?: Maybe<string>;
  /** All values that are contained in given list. */
  github_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  github_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  github_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  github_lte?: Maybe<string>;
  /** All values greater than the given value. */
  github_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  github_gte?: Maybe<string>;
  /** All values containing the given string. */
  github_contains?: Maybe<string>;
  /** All values not containing the given string. */
  github_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  github_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  github_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  github_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  github_not_ends_with?: Maybe<string>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  photoUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  photoUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  photoUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  photoUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  photoUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  photoUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  photoUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  photoUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  photoUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  photoUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  photoUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  photoUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  photoUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  photoUrl_not_ends_with?: Maybe<string>;

  teamSection?: Maybe<TeamSection>;
  /** All values that are not equal to given value. */
  teamSection_not?: Maybe<TeamSection>;
  /** All values that are contained in given list. */
  teamSection_in?: Maybe<TeamSection[]>;
  /** All values that are not contained in given list. */
  teamSection_not_in?: Maybe<TeamSection[]>;

  twitter?: Maybe<string>;
  /** All values that are not equal to given value. */
  twitter_not?: Maybe<string>;
  /** All values that are contained in given list. */
  twitter_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  twitter_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  twitter_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  twitter_lte?: Maybe<string>;
  /** All values greater than the given value. */
  twitter_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  twitter_gte?: Maybe<string>;
  /** All values containing the given string. */
  twitter_contains?: Maybe<string>;
  /** All values not containing the given string. */
  twitter_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  twitter_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  twitter_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  twitter_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  twitter_not_ends_with?: Maybe<string>;

  conference?: Maybe<ConferenceFilter>;
}

export interface TicketFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<TicketFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<TicketFilter[]>;

  available?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  available_not?: Maybe<boolean>;

  availableUntil?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  availableUntil_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  availableUntil_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  availableUntil_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  availableUntil_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  availableUntil_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  availableUntil_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  availableUntil_gte?: Maybe<DateTime>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  price?: Maybe<string>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<string>;
  /** All values that are contained in given list. */
  price_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  price_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<string>;
  /** All values greater than the given value. */
  price_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<string>;
  /** All values containing the given string. */
  price_contains?: Maybe<string>;
  /** All values not containing the given string. */
  price_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  price_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  price_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  price_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  price_not_ends_with?: Maybe<string>;

  soldOut?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  soldOut_not?: Maybe<boolean>;

  url?: Maybe<string>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<string>;
  /** All values containing the given string. */
  url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<string>;

  conference?: Maybe<ConferenceFilter>;
}

export interface VenueFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<VenueFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<VenueFilter[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  phone?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<string>;

  url?: Maybe<string>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<string>;
  /** All values containing the given string. */
  url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<string>;

  address?: Maybe<AddressFilter>;

  conference?: Maybe<ConferenceFilter>;
}

export interface AddressFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<AddressFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<AddressFilter[]>;

  city?: Maybe<string>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<string>;
  /** All values that are contained in given list. */
  city_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  city_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  city_lte?: Maybe<string>;
  /** All values greater than the given value. */
  city_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  city_gte?: Maybe<string>;
  /** All values containing the given string. */
  city_contains?: Maybe<string>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  city_not_ends_with?: Maybe<string>;

  country?: Maybe<string>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<string>;
  /** All values that are contained in given list. */
  country_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  country_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  country_lte?: Maybe<string>;
  /** All values greater than the given value. */
  country_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  country_gte?: Maybe<string>;
  /** All values containing the given string. */
  country_contains?: Maybe<string>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  country_not_ends_with?: Maybe<string>;

  houseNumber?: Maybe<string>;
  /** All values that are not equal to given value. */
  houseNumber_not?: Maybe<string>;
  /** All values that are contained in given list. */
  houseNumber_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  houseNumber_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  houseNumber_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  houseNumber_lte?: Maybe<string>;
  /** All values greater than the given value. */
  houseNumber_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  houseNumber_gte?: Maybe<string>;
  /** All values containing the given string. */
  houseNumber_contains?: Maybe<string>;
  /** All values not containing the given string. */
  houseNumber_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  houseNumber_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  houseNumber_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  houseNumber_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  houseNumber_not_ends_with?: Maybe<string>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  latitude?: Maybe<number>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<number>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<number>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<number>;

  longitude?: Maybe<number>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<number>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<number>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<number>;

  streetName?: Maybe<string>;
  /** All values that are not equal to given value. */
  streetName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  streetName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  streetName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  streetName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  streetName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  streetName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  streetName_gte?: Maybe<string>;
  /** All values containing the given string. */
  streetName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  streetName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  streetName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  streetName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  streetName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  streetName_not_ends_with?: Maybe<string>;

  zipCode?: Maybe<string>;
  /** All values that are not equal to given value. */
  zipCode_not?: Maybe<string>;
  /** All values that are contained in given list. */
  zipCode_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  zipCode_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  zipCode_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  zipCode_lte?: Maybe<string>;
  /** All values greater than the given value. */
  zipCode_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  zipCode_gte?: Maybe<string>;
  /** All values containing the given string. */
  zipCode_contains?: Maybe<string>;
  /** All values not containing the given string. */
  zipCode_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  zipCode_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  zipCode_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  zipCode_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  zipCode_not_ends_with?: Maybe<string>;

  venue?: Maybe<VenueFilter>;
}

export interface AddressvenueVenue {
  name: string;

  phone: string;

  url: string;

  conferenceId?: Maybe<string>;

  conference?: Maybe<VenueconferenceConference>;
}

export interface VenueconferenceConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description: string;

  edition: Edition;

  location: string;

  locationUrl: string;

  name: string;

  scheduleUrl: string;

  shortDescription: string;

  speakersUrl: string;

  sponsorEmail: string;

  sponsorsUrl: string;

  supportEmail: string;

  tagLine: string;

  teamUrl: string;

  ticketsUrl: string;

  url: string;

  videosUrl: string;

  year: number;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface ConferencespeakersSpeaker {
  name: string;

  talkId?: Maybe<string>;

  talk?: Maybe<SpeakertalkTalk>;
}

export interface SpeakertalkTalk {
  cardUrl: string;

  description: string;

  duration: number;

  endTime: DateTime;

  entryType: ScheduleEntryType;

  format: TalkFormat;

  slidesUrl?: Maybe<string>;

  startTime: DateTime;

  title: string;

  url: string;

  videoUrl?: Maybe<string>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<TalkconferenceConference>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<TalkspeakersSpeaker[]>;
}

export interface TalkconferenceConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description: string;

  edition: Edition;

  location: string;

  locationUrl: string;

  name: string;

  scheduleUrl: string;

  shortDescription: string;

  speakersUrl: string;

  sponsorEmail: string;

  sponsorsUrl: string;

  supportEmail: string;

  tagLine: string;

  teamUrl: string;

  ticketsUrl: string;

  url: string;

  videosUrl: string;

  year: number;

  venueId?: Maybe<string>;

  venue?: Maybe<ConferencevenueVenue>;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface ConferencevenueVenue {
  name: string;

  phone: string;

  url: string;

  addressId?: Maybe<string>;

  address?: Maybe<VenueaddressAddress>;
}

export interface VenueaddressAddress {
  city: string;

  country: string;

  houseNumber: string;

  latitude: number;

  longitude: number;

  streetName: string;

  zipCode: string;
}

export interface ConferencesponsorsSponsor {
  description?: Maybe<string>;

  github?: Maybe<string>;

  logoUrl: string;

  name: string;

  sponsorType: SponsorType;

  twitter?: Maybe<string>;

  url: string;
}

export interface ConferencetalksTalk {
  cardUrl: string;

  description: string;

  duration: number;

  endTime: DateTime;

  entryType: ScheduleEntryType;

  format: TalkFormat;

  slidesUrl?: Maybe<string>;

  startTime: DateTime;

  title: string;

  url: string;

  videoUrl?: Maybe<string>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<TalkspeakersSpeaker[]>;
}

export interface TalkspeakersSpeaker {
  name: string;

  conferenceId?: Maybe<string>;

  conference?: Maybe<SpeakerconferenceConference>;
}

export interface SpeakerconferenceConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description: string;

  edition: Edition;

  location: string;

  locationUrl: string;

  name: string;

  scheduleUrl: string;

  shortDescription: string;

  speakersUrl: string;

  sponsorEmail: string;

  sponsorsUrl: string;

  supportEmail: string;

  tagLine: string;

  teamUrl: string;

  ticketsUrl: string;

  url: string;

  videosUrl: string;

  year: number;

  venueId?: Maybe<string>;

  venue?: Maybe<ConferencevenueVenue>;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface ConferenceteamTeamMember {
  description?: Maybe<string>;

  github?: Maybe<string>;

  name: string;

  photoUrl?: Maybe<string>;

  teamSection: TeamSection;

  twitter?: Maybe<string>;
}

export interface ConferenceticketsTicket {
  available: boolean;

  availableUntil: DateTime;

  name: string;

  price: string;

  soldOut: boolean;

  url: string;
}

export interface ScheduleEntryconferenceConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description: string;

  edition: Edition;

  location: string;

  locationUrl: string;

  name: string;

  scheduleUrl: string;

  shortDescription: string;

  speakersUrl: string;

  sponsorEmail: string;

  sponsorsUrl: string;

  supportEmail: string;

  tagLine: string;

  teamUrl: string;

  ticketsUrl: string;

  url: string;

  videosUrl: string;

  year: number;

  venueId?: Maybe<string>;

  venue?: Maybe<ConferencevenueVenue>;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface SponsorconferenceConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description: string;

  edition: Edition;

  location: string;

  locationUrl: string;

  name: string;

  scheduleUrl: string;

  shortDescription: string;

  speakersUrl: string;

  sponsorEmail: string;

  sponsorsUrl: string;

  supportEmail: string;

  tagLine: string;

  teamUrl: string;

  ticketsUrl: string;

  url: string;

  videosUrl: string;

  year: number;

  venueId?: Maybe<string>;

  venue?: Maybe<ConferencevenueVenue>;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface TeamMemberconferenceConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description: string;

  edition: Edition;

  location: string;

  locationUrl: string;

  name: string;

  scheduleUrl: string;

  shortDescription: string;

  speakersUrl: string;

  sponsorEmail: string;

  sponsorsUrl: string;

  supportEmail: string;

  tagLine: string;

  teamUrl: string;

  ticketsUrl: string;

  url: string;

  videosUrl: string;

  year: number;

  venueId?: Maybe<string>;

  venue?: Maybe<ConferencevenueVenue>;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface TicketconferenceConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description: string;

  edition: Edition;

  location: string;

  locationUrl: string;

  name: string;

  scheduleUrl: string;

  shortDescription: string;

  speakersUrl: string;

  sponsorEmail: string;

  sponsorsUrl: string;

  supportEmail: string;

  tagLine: string;

  teamUrl: string;

  ticketsUrl: string;

  url: string;

  videosUrl: string;

  year: number;

  venueId?: Maybe<string>;

  venue?: Maybe<ConferencevenueVenue>;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface UpdateAddress {
  city?: Maybe<string>;

  country?: Maybe<string>;

  houseNumber?: Maybe<string>;

  id: string;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  streetName?: Maybe<string>;

  zipCode?: Maybe<string>;

  venueId?: Maybe<string>;

  venue?: Maybe<AddressvenueVenue>;
}

export interface CreateAddress {
  city: string;

  country: string;

  houseNumber: string;

  latitude: number;

  longitude: number;

  streetName: string;

  zipCode: string;

  venueId?: Maybe<string>;

  venue?: Maybe<AddressvenueVenue>;
}

export interface UpdateConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description?: Maybe<string>;

  edition?: Maybe<Edition>;

  id: string;

  location?: Maybe<string>;

  locationUrl?: Maybe<string>;

  name?: Maybe<string>;

  scheduleUrl?: Maybe<string>;

  shortDescription?: Maybe<string>;

  speakersUrl?: Maybe<string>;

  sponsorEmail?: Maybe<string>;

  sponsorsUrl?: Maybe<string>;

  supportEmail?: Maybe<string>;

  tagLine?: Maybe<string>;

  teamUrl?: Maybe<string>;

  ticketsUrl?: Maybe<string>;

  url?: Maybe<string>;

  videosUrl?: Maybe<string>;

  year?: Maybe<number>;

  venueId?: Maybe<string>;

  venue?: Maybe<ConferencevenueVenue>;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface CreateConference {
  dateEnd?: Maybe<DateTime>;

  dateStart?: Maybe<DateTime>;

  description: string;

  edition: Edition;

  location: string;

  locationUrl: string;

  name: string;

  scheduleUrl: string;

  shortDescription: string;

  speakersUrl: string;

  sponsorEmail: string;

  sponsorsUrl: string;

  supportEmail: string;

  tagLine: string;

  teamUrl: string;

  ticketsUrl: string;

  url: string;

  videosUrl: string;

  year: number;

  venueId?: Maybe<string>;

  venue?: Maybe<ConferencevenueVenue>;

  scheduleIds?: Maybe<string[]>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<ConferencespeakersSpeaker[]>;

  sponsorsIds?: Maybe<string[]>;

  sponsors?: Maybe<ConferencesponsorsSponsor[]>;

  talksIds?: Maybe<string[]>;

  talks?: Maybe<ConferencetalksTalk[]>;

  teamIds?: Maybe<string[]>;

  team?: Maybe<ConferenceteamTeamMember[]>;

  ticketsIds?: Maybe<string[]>;

  tickets?: Maybe<ConferenceticketsTicket[]>;
}

export interface UpdateFile {
  id: string;

  name?: Maybe<string>;
}

export interface CreateFile {
  name: string;
}

export interface UpdateNotification {
  body?: Maybe<string>;

  fromName?: Maybe<string>;

  id: string;

  mailchimpExport?: Maybe<boolean>;

  sent?: Maybe<boolean>;

  sibscriberId?: Maybe<string>;

  title?: Maybe<string>;

  to?: Maybe<NotificationTo>;
}

export interface CreateNotification {
  body: string;

  fromName: string;

  mailchimpExport: boolean;

  sent?: Maybe<boolean>;

  sibscriberId?: Maybe<string>;

  title: string;

  to: NotificationTo;
}

export interface UpdateScheduleEntry {
  id: string;

  conferenceId?: Maybe<string>;

  conference?: Maybe<ScheduleEntryconferenceConference>;
}

export interface CreateScheduleEntry {
  conferenceId?: Maybe<string>;

  conference?: Maybe<ScheduleEntryconferenceConference>;
}

export interface UpdateSpeaker {
  id: string;

  name?: Maybe<string>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<SpeakerconferenceConference>;

  talkId?: Maybe<string>;

  talk?: Maybe<SpeakertalkTalk>;
}

export interface CreateSpeaker {
  name: string;

  conferenceId?: Maybe<string>;

  conference?: Maybe<SpeakerconferenceConference>;

  talkId?: Maybe<string>;

  talk?: Maybe<SpeakertalkTalk>;
}

export interface UpdateSponsor {
  description?: Maybe<string>;

  github?: Maybe<string>;

  id: string;

  logoUrl?: Maybe<string>;

  name?: Maybe<string>;

  sponsorType?: Maybe<SponsorType>;

  twitter?: Maybe<string>;

  url?: Maybe<string>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<SponsorconferenceConference>;
}

export interface CreateSponsor {
  description?: Maybe<string>;

  github?: Maybe<string>;

  logoUrl: string;

  name: string;

  sponsorType: SponsorType;

  twitter?: Maybe<string>;

  url: string;

  conferenceId?: Maybe<string>;

  conference?: Maybe<SponsorconferenceConference>;
}

export interface UpdateSubscriber {
  email?: Maybe<string>;

  id: string;

  mailchimpExported?: Maybe<boolean>;

  mailchimpId?: Maybe<string>;

  name?: Maybe<string>;

  notified?: Maybe<boolean>;

  unsubscribed?: Maybe<boolean>;
}

export interface CreateSubscriber {
  email: string;

  mailchimpExported?: Maybe<boolean>;

  mailchimpId?: Maybe<string>;

  name: string;

  notified?: Maybe<boolean>;

  unsubscribed?: Maybe<boolean>;
}

export interface UpdateTalk {
  cardUrl?: Maybe<string>;

  description?: Maybe<string>;

  duration?: Maybe<number>;

  endTime?: Maybe<DateTime>;

  entryType?: Maybe<ScheduleEntryType>;

  format?: Maybe<TalkFormat>;

  id: string;

  slidesUrl?: Maybe<string>;

  startTime?: Maybe<DateTime>;

  title?: Maybe<string>;

  url?: Maybe<string>;

  videoUrl?: Maybe<string>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<TalkconferenceConference>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<TalkspeakersSpeaker[]>;
}

export interface CreateTalk {
  cardUrl: string;

  description: string;

  duration: number;

  endTime: DateTime;

  entryType: ScheduleEntryType;

  format: TalkFormat;

  slidesUrl?: Maybe<string>;

  startTime: DateTime;

  title: string;

  url: string;

  videoUrl?: Maybe<string>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<TalkconferenceConference>;

  speakersIds?: Maybe<string[]>;

  speakers?: Maybe<TalkspeakersSpeaker[]>;
}

export interface UpdateTeamMember {
  description?: Maybe<string>;

  github?: Maybe<string>;

  id: string;

  name?: Maybe<string>;

  photoUrl?: Maybe<string>;

  teamSection?: Maybe<TeamSection>;

  twitter?: Maybe<string>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<TeamMemberconferenceConference>;
}

export interface CreateTeamMember {
  description?: Maybe<string>;

  github?: Maybe<string>;

  name: string;

  photoUrl?: Maybe<string>;

  teamSection: TeamSection;

  twitter?: Maybe<string>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<TeamMemberconferenceConference>;
}

export interface UpdateTicket {
  available?: Maybe<boolean>;

  availableUntil?: Maybe<DateTime>;

  id: string;

  name?: Maybe<string>;

  price?: Maybe<string>;

  soldOut?: Maybe<boolean>;

  url?: Maybe<string>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<TicketconferenceConference>;
}

export interface CreateTicket {
  available: boolean;

  availableUntil: DateTime;

  name: string;

  price: string;

  soldOut: boolean;

  url: string;

  conferenceId?: Maybe<string>;

  conference?: Maybe<TicketconferenceConference>;
}

export interface UpdateUser {
  email?: Maybe<string>;

  id: string;

  password?: Maybe<string>;
}

export interface CreateUser {
  email?: Maybe<string>;

  password?: Maybe<string>;
}

export interface UpdateVenue {
  id: string;

  name?: Maybe<string>;

  phone?: Maybe<string>;

  url?: Maybe<string>;

  addressId?: Maybe<string>;

  address?: Maybe<VenueaddressAddress>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<VenueconferenceConference>;
}

export interface CreateVenue {
  name: string;

  phone: string;

  url: string;

  addressId?: Maybe<string>;

  address?: Maybe<VenueaddressAddress>;

  conferenceId?: Maybe<string>;

  conference?: Maybe<VenueconferenceConference>;
}

export interface InvokeFunctionInput {
  name: string;

  input: string;

  clientMutationId?: Maybe<string>;
}

export enum Edition {
  Berlin2018 = 'Berlin2018',
  Berlin2017 = 'Berlin2017'
}

export enum ScheduleEntryType {
  Lunch = 'Lunch',
  Break = 'Break',
  Talk = 'Talk',
  Registration = 'Registration'
}

export enum TalkFormat {
  Lightning = 'Lightning',
  Standard = 'Standard',
  PanelDiscussion = 'PanelDiscussion',
  Special = 'Special'
}

export enum SponsorType {
  Bronze = 'Bronze',
  Silver = 'Silver',
  Gold = 'Gold',
  Platinum = 'Platinum',
  Opportunity = 'Opportunity',
  Partner = 'Partner',
  Organiser = 'Organiser'
}

export enum TeamSection {
  SpecialThanks = 'SpecialThanks',
  Core = 'Core'
}

export enum ScheduleEntryOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export enum SpeakerOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SponsorOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SponsorTypeAsc = 'sponsorType_ASC',
  SponsorTypeDesc = 'sponsorType_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum TalkOrderBy {
  CardUrlAsc = 'cardUrl_ASC',
  CardUrlDesc = 'cardUrl_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  EntryTypeAsc = 'entryType_ASC',
  EntryTypeDesc = 'entryType_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SlidesUrlAsc = 'slidesUrl_ASC',
  SlidesUrlDesc = 'slidesUrl_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC'
}

export enum TeamMemberOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhotoUrlAsc = 'photoUrl_ASC',
  PhotoUrlDesc = 'photoUrl_DESC',
  TeamSectionAsc = 'teamSection_ASC',
  TeamSectionDesc = 'teamSection_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC'
}

export enum TicketOrderBy {
  AvailableAsc = 'available_ASC',
  AvailableDesc = 'available_DESC',
  AvailableUntilAsc = 'availableUntil_ASC',
  AvailableUntilDesc = 'availableUntil_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SoldOutAsc = 'soldOut_ASC',
  SoldOutDesc = 'soldOut_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum NotificationTo {
  AllSubscribers = 'AllSubscribers',
  SingleSubscriber = 'SingleSubscriber'
}

export type DateTime = any;
