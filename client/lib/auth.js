import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const NEXT_AUTH_CONFIG = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials) {
            //TODO:  add signin logic here
            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }})
            if (user && user.password === credentials.password) {
              return user;
            } else {
                return null;
            }
          },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }) => {
        if (user) {
            token.uid = user.id;
        }
        return token;
        },
      session: ({ session, token, user }) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
  }