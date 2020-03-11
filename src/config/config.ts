export const config = {
  // "dev": {
  //   "username": "udagramzaratedev",
  //   "password": "password",
  //   "database": "udagramzaratedev",
  //   "host": "udagramzaratedev.crscnrqgttdm.us-east-1.rds.amazonaws.com",
  //   "dialect": "postgres",
  //   "aws_region": "us-east-1",
  //   "aws_profile": "udacity",
  //   "aws_media_bucket": "udagram-zarate-dev"
  // },
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "jwt": {
      "secret": "helloworld",
    },
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
