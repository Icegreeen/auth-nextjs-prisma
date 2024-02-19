<h1 align="left">
    <a">Authentication in Next.js-14</a>
</h1>

> Project status: Completed :heavy_check_mark:

![Captura de tela 2024-02-19 024803](https://github.com/Icegreeen/auth-nextjs-prisma/assets/56550632/909a99e6-0bc8-43bc-af0b-2418f9b42cee)

![Captura de tela 2024-02-19 031238](https://github.com/Icegreeen/auth-nextjs-prisma/assets/56550632/9a469872-e4d1-41f2-9604-fbc7d8b1a49a)

![254062375-6ad82148-544d-4a82-9f2d-ecb15f64a48e (1)](https://github.com/Icegreeen/auth-nextjs-prisma/assets/56550632/1ca6605b-0f6c-496e-845d-9b27c313d7f6)
                                  
# :pushpin: Table of Contents

* [Running Locally](#construction_worker-running-locally)
* [FAQ](#postbox-faq)
* [Issues](#bug-issues)
* [Contributing](#tada-contributing)

## :construction_worker: Running Locally

This project is an application that offers email or GitHub authentication, providing users with a seamless login experience. Users can easily access the platform, staying connected through their GitHub accounts or using their personal email address.

#### Clone repository
```bash
git clone https://github.com/Icegreeen/auth-nextjs-prisma
```

#### Define environment variables
```bash
cp .env.local.example .env.local

# OAuth github
GITHUB_ID=
GITHUB_SECRET_ID=

# envs for e-mail service
EMAIL_SERVER_USER=resend
EMAIL_SERVER_PASSWORD=
EMAIL_SERVER_HOST=smtp.resend.com
EMAIL_SERVER_PORT=465
EMAIL_FROM=onboarding@resend.dev

# database on supabase
DATABASE_URL=

```

#### Install dependencies & execute web application in development mode
```bash
yarn
yarn dev
```

Define the environment variables by creating a .env.local file similar to [.env.local.example](https://github.com/Icegreeen/my-blog.git.env.local.example)

# :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** [Next.js-14](https://nextjs.org/), [Resend](https://resend.com/), [Prisma](https://www.prisma.io/) and [Supabase](https://supabase.com/)

**Question** Why Next.js instead of other frameworks of React out there?

**Answer** I chose Next.js in order to opt out for different rendering strategies

# :bug: Issues

Feel free to **file a new issue** with a respective title and description. If you already found a solution to your problem, **I would love to review your pull request**!

# :tada: Contributing

Check out the [contributing](https://github.com/Icegreeen/my-blog/blob/main/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing



