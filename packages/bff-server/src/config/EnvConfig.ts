interface EnvVariables {
  port: string;
}

export const envConfig: EnvVariables = {
  port: process.env.PORT ?? '',
};
