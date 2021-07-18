enum ActionKind {
  EMAIL_USER_INPUT = "EMAIL_USER_INPUT",
  EMAIL_INPUT_BLUR = "EMAIL_INPUT_BLUR",
}

export type Action = {
  type: string;
  payload?: string | null;
};
