export type JWTPayload = {
  /**
   * The user's Farcaster ID.
   */
  sub: number;

  /**
   * The Farcaster Quick Auth server that issued this token.
   */
  iss: string

  /**
   * The domain this token was issued to.
   */
  aud: string;

  /**
   * The JWT expiration time.
   */
  exp: number

  /**
   * The JWT issued at time.
   */
  iat: number
}

