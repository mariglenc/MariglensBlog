// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// import { connectDatabase } from "@/helpers/db-util";
// import { isPasswordValid } from "../../../utils/hash";

// export default NextAuth({
//   pages: {
//     signIn: "/",
//   },
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       name: "Credentials",
//       async authorize(credentials) {
//         let client;
//         try {
//           client = await connectDatabase();
//         } catch (err) {
//           console.log(err);
//         }
//         const db = client.db();
//         const user = await db
//           .collection("glensBlog.users")
//           .findOne({ email: credentials.email });
//         console.log(user)
//         if (!user) {
//           return null;
//         }

//         const isPasswordMatch = await isPasswordValid(
//           credentials.password,
//           user.password
//         );

//         if (!isPasswordMatch) {
//           return null;
//         }

//         return {
//           name: user.name,
//           email: user.email,
//         };
//       },
//     }),
//   ],

//   secret: process.env.SECRET,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 Days
//   },
// });
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDatabase } from '@/helpers/db-util';
import { comparePasswords } from '../../../utils/hash'; // Assuming you have a function for comparing passwords

export default NextAuth({
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        let client;
        try {
          client = await connectDatabase();

          const db = client.db();
          const user = await db.collection('users').findOne({ email: credentials.email });

          if (!user) {
            return null;
          }

          const isPasswordMatch = comparePasswords(credentials.password, user.password);
          console.log("isPasswordMatch - ",isPasswordMatch)
          if (!isPasswordMatch) {
            console.log("isPasswordMatch false return null - ")

            return null;
          }

          // Passwords match, return the user
          return user;
        } catch (err) {
          console.error(err);
          return null;
        } finally {
          if (client) {
            await client.close();
          }
        }
      },
    }),
  ],

  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
});
