export type Project = {
  title: string;
  imgSrc: string;
  liveSrc: string;
  description: string;
};

export type Skill = {
  index: number;
  title: string;
  description: string;
};

export type Remark = {
  title: string;
  description: string;
  imgSrc: string;
};

export type Translation = {
  main_title1: string;
  main_title2: string;
  main_description: string;
  contact_me: string;
  about_me: string;
  skills: string;
  projects: string;
  remarks: string;
  projects_title: string;
  skills_title: string;
  about_me_title: string;
  remarks_title: string;
  contat_me_title: string;
  see_more: string;
  about_me_content: string;
  projects_content: Project[];
  skills_content: Skill[];
  remarks_content: Remark[];
  name: string;
  email: string;
  message: string;
  send: string;
  name_error: string,
  email_error: string,
  message_error: string,
  message_sent: string,
  message_sent_error: string
};
