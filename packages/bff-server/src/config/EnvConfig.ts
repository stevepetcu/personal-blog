interface EnvVariables {
  port: string;
}

export const EnvConfig: EnvVariables = {
  port: process.env.PORT ?? '',
};
