
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_otp
 * 
 */
export type user_otp = $Result.DefaultSelection<Prisma.$user_otpPayload>
/**
 * Model webhook
 * 
 */
export type webhook = $Result.DefaultSelection<Prisma.$webhookPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const USER_TYPE: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type USER_TYPE = (typeof USER_TYPE)[keyof typeof USER_TYPE]


export const USER_OTP_TYPE: {
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};

export type USER_OTP_TYPE = (typeof USER_OTP_TYPE)[keyof typeof USER_OTP_TYPE]

}

export type USER_TYPE = $Enums.USER_TYPE

export const USER_TYPE: typeof $Enums.USER_TYPE

export type USER_OTP_TYPE = $Enums.USER_OTP_TYPE

export const USER_OTP_TYPE: typeof $Enums.USER_OTP_TYPE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_otp`: Exposes CRUD operations for the **user_otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_otps
    * const user_otps = await prisma.user_otp.findMany()
    * ```
    */
  get user_otp(): Prisma.user_otpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhook`: Exposes CRUD operations for the **webhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webhooks
    * const webhooks = await prisma.webhook.findMany()
    * ```
    */
  get webhook(): Prisma.webhookDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    user_otp: 'user_otp',
    webhook: 'webhook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "user_otp" | "webhook"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_otp: {
        payload: Prisma.$user_otpPayload<ExtArgs>
        fields: Prisma.user_otpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_otpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_otpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>
          }
          findFirst: {
            args: Prisma.user_otpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_otpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>
          }
          findMany: {
            args: Prisma.user_otpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>[]
          }
          create: {
            args: Prisma.user_otpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>
          }
          createMany: {
            args: Prisma.user_otpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_otpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>[]
          }
          delete: {
            args: Prisma.user_otpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>
          }
          update: {
            args: Prisma.user_otpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>
          }
          deleteMany: {
            args: Prisma.user_otpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_otpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_otpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>[]
          }
          upsert: {
            args: Prisma.user_otpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_otpPayload>
          }
          aggregate: {
            args: Prisma.User_otpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_otp>
          }
          groupBy: {
            args: Prisma.user_otpGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_otpGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_otpCountArgs<ExtArgs>
            result: $Utils.Optional<User_otpCountAggregateOutputType> | number
          }
        }
      }
      webhook: {
        payload: Prisma.$webhookPayload<ExtArgs>
        fields: Prisma.webhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          findFirst: {
            args: Prisma.webhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          findMany: {
            args: Prisma.webhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>[]
          }
          create: {
            args: Prisma.webhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          createMany: {
            args: Prisma.webhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.webhookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>[]
          }
          delete: {
            args: Prisma.webhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          update: {
            args: Prisma.webhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          deleteMany: {
            args: Prisma.webhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.webhookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>[]
          }
          upsert: {
            args: Prisma.webhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhookPayload>
          }
          aggregate: {
            args: Prisma.WebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhook>
          }
          groupBy: {
            args: Prisma.webhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.webhookCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    user_otp?: user_otpOmit
    webhook?: webhookOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    otps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otps?: boolean | UserCountOutputTypeCountOtpsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_otpWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    total_millage: number | null
    total_coins: number | null
    available_coins: number | null
  }

  export type UserSumAggregateOutputType = {
    total_millage: number | null
    total_coins: number | null
    available_coins: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    photo_url: string | null
    name: string | null
    email: string | null
    password: string | null
    type: $Enums.USER_TYPE | null
    total_millage: number | null
    total_coins: number | null
    available_coins: number | null
    email_verified: boolean | null
    profile_verified: boolean | null
    referral_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    photo_url: string | null
    name: string | null
    email: string | null
    password: string | null
    type: $Enums.USER_TYPE | null
    total_millage: number | null
    total_coins: number | null
    available_coins: number | null
    email_verified: boolean | null
    profile_verified: boolean | null
    referral_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    photo_url: number
    name: number
    email: number
    password: number
    type: number
    total_millage: number
    total_coins: number
    available_coins: number
    email_verified: number
    profile_verified: number
    referral_code: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    total_millage?: true
    total_coins?: true
    available_coins?: true
  }

  export type UserSumAggregateInputType = {
    total_millage?: true
    total_coins?: true
    available_coins?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    photo_url?: true
    name?: true
    email?: true
    password?: true
    type?: true
    total_millage?: true
    total_coins?: true
    available_coins?: true
    email_verified?: true
    profile_verified?: true
    referral_code?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    photo_url?: true
    name?: true
    email?: true
    password?: true
    type?: true
    total_millage?: true
    total_coins?: true
    available_coins?: true
    email_verified?: true
    profile_verified?: true
    referral_code?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    photo_url?: true
    name?: true
    email?: true
    password?: true
    type?: true
    total_millage?: true
    total_coins?: true
    available_coins?: true
    email_verified?: true
    profile_verified?: true
    referral_code?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    photo_url: string | null
    name: string
    email: string
    password: string
    type: $Enums.USER_TYPE
    total_millage: number
    total_coins: number
    available_coins: number
    email_verified: boolean
    profile_verified: boolean
    referral_code: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo_url?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    total_millage?: boolean
    total_coins?: boolean
    available_coins?: boolean
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    otps?: boolean | user$otpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo_url?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    total_millage?: boolean
    total_coins?: boolean
    available_coins?: boolean
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo_url?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    total_millage?: boolean
    total_coins?: boolean
    available_coins?: boolean
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    photo_url?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    total_millage?: boolean
    total_coins?: boolean
    available_coins?: boolean
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo_url" | "name" | "email" | "password" | "type" | "total_millage" | "total_coins" | "available_coins" | "email_verified" | "profile_verified" | "referral_code" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otps?: boolean | user$otpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      otps: Prisma.$user_otpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      photo_url: string | null
      name: string
      email: string
      password: string
      type: $Enums.USER_TYPE
      total_millage: number
      total_coins: number
      available_coins: number
      email_verified: boolean
      profile_verified: boolean
      referral_code: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    otps<T extends user$otpsArgs<ExtArgs> = {}>(args?: Subset<T, user$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly photo_url: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly type: FieldRef<"user", 'USER_TYPE'>
    readonly total_millage: FieldRef<"user", 'Float'>
    readonly total_coins: FieldRef<"user", 'Float'>
    readonly available_coins: FieldRef<"user", 'Float'>
    readonly email_verified: FieldRef<"user", 'Boolean'>
    readonly profile_verified: FieldRef<"user", 'Boolean'>
    readonly referral_code: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.otps
   */
  export type user$otpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    where?: user_otpWhereInput
    orderBy?: user_otpOrderByWithRelationInput | user_otpOrderByWithRelationInput[]
    cursor?: user_otpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_otpScalarFieldEnum | User_otpScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_otp
   */

  export type AggregateUser_otp = {
    _count: User_otpCountAggregateOutputType | null
    _min: User_otpMinAggregateOutputType | null
    _max: User_otpMaxAggregateOutputType | null
  }

  export type User_otpMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    expires_at: Date | null
    otp: string | null
    user_id: string | null
    otp_type: $Enums.USER_OTP_TYPE | null
  }

  export type User_otpMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    expires_at: Date | null
    otp: string | null
    user_id: string | null
    otp_type: $Enums.USER_OTP_TYPE | null
  }

  export type User_otpCountAggregateOutputType = {
    id: number
    created_at: number
    expires_at: number
    otp: number
    user_id: number
    otp_type: number
    _all: number
  }


  export type User_otpMinAggregateInputType = {
    id?: true
    created_at?: true
    expires_at?: true
    otp?: true
    user_id?: true
    otp_type?: true
  }

  export type User_otpMaxAggregateInputType = {
    id?: true
    created_at?: true
    expires_at?: true
    otp?: true
    user_id?: true
    otp_type?: true
  }

  export type User_otpCountAggregateInputType = {
    id?: true
    created_at?: true
    expires_at?: true
    otp?: true
    user_id?: true
    otp_type?: true
    _all?: true
  }

  export type User_otpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_otp to aggregate.
     */
    where?: user_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_otps to fetch.
     */
    orderBy?: user_otpOrderByWithRelationInput | user_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_otps
    **/
    _count?: true | User_otpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_otpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_otpMaxAggregateInputType
  }

  export type GetUser_otpAggregateType<T extends User_otpAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_otp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_otp[P]>
      : GetScalarType<T[P], AggregateUser_otp[P]>
  }




  export type user_otpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_otpWhereInput
    orderBy?: user_otpOrderByWithAggregationInput | user_otpOrderByWithAggregationInput[]
    by: User_otpScalarFieldEnum[] | User_otpScalarFieldEnum
    having?: user_otpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_otpCountAggregateInputType | true
    _min?: User_otpMinAggregateInputType
    _max?: User_otpMaxAggregateInputType
  }

  export type User_otpGroupByOutputType = {
    id: string
    created_at: Date
    expires_at: Date
    otp: string
    user_id: string
    otp_type: $Enums.USER_OTP_TYPE
    _count: User_otpCountAggregateOutputType | null
    _min: User_otpMinAggregateOutputType | null
    _max: User_otpMaxAggregateOutputType | null
  }

  type GetUser_otpGroupByPayload<T extends user_otpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_otpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_otpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_otpGroupByOutputType[P]>
            : GetScalarType<T[P], User_otpGroupByOutputType[P]>
        }
      >
    >


  export type user_otpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expires_at?: boolean
    otp?: boolean
    user_id?: boolean
    otp_type?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_otp"]>

  export type user_otpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expires_at?: boolean
    otp?: boolean
    user_id?: boolean
    otp_type?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_otp"]>

  export type user_otpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    expires_at?: boolean
    otp?: boolean
    user_id?: boolean
    otp_type?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_otp"]>

  export type user_otpSelectScalar = {
    id?: boolean
    created_at?: boolean
    expires_at?: boolean
    otp?: boolean
    user_id?: boolean
    otp_type?: boolean
  }

  export type user_otpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "expires_at" | "otp" | "user_id" | "otp_type", ExtArgs["result"]["user_otp"]>
  export type user_otpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_otpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_otpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_otpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_otp"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      expires_at: Date
      otp: string
      user_id: string
      otp_type: $Enums.USER_OTP_TYPE
    }, ExtArgs["result"]["user_otp"]>
    composites: {}
  }

  type user_otpGetPayload<S extends boolean | null | undefined | user_otpDefaultArgs> = $Result.GetResult<Prisma.$user_otpPayload, S>

  type user_otpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_otpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_otpCountAggregateInputType | true
    }

  export interface user_otpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_otp'], meta: { name: 'user_otp' } }
    /**
     * Find zero or one User_otp that matches the filter.
     * @param {user_otpFindUniqueArgs} args - Arguments to find a User_otp
     * @example
     * // Get one User_otp
     * const user_otp = await prisma.user_otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_otpFindUniqueArgs>(args: SelectSubset<T, user_otpFindUniqueArgs<ExtArgs>>): Prisma__user_otpClient<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_otpFindUniqueOrThrowArgs} args - Arguments to find a User_otp
     * @example
     * // Get one User_otp
     * const user_otp = await prisma.user_otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_otpFindUniqueOrThrowArgs>(args: SelectSubset<T, user_otpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_otpClient<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_otpFindFirstArgs} args - Arguments to find a User_otp
     * @example
     * // Get one User_otp
     * const user_otp = await prisma.user_otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_otpFindFirstArgs>(args?: SelectSubset<T, user_otpFindFirstArgs<ExtArgs>>): Prisma__user_otpClient<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_otpFindFirstOrThrowArgs} args - Arguments to find a User_otp
     * @example
     * // Get one User_otp
     * const user_otp = await prisma.user_otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_otpFindFirstOrThrowArgs>(args?: SelectSubset<T, user_otpFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_otpClient<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_otpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_otps
     * const user_otps = await prisma.user_otp.findMany()
     * 
     * // Get first 10 User_otps
     * const user_otps = await prisma.user_otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_otpWithIdOnly = await prisma.user_otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_otpFindManyArgs>(args?: SelectSubset<T, user_otpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_otp.
     * @param {user_otpCreateArgs} args - Arguments to create a User_otp.
     * @example
     * // Create one User_otp
     * const User_otp = await prisma.user_otp.create({
     *   data: {
     *     // ... data to create a User_otp
     *   }
     * })
     * 
     */
    create<T extends user_otpCreateArgs>(args: SelectSubset<T, user_otpCreateArgs<ExtArgs>>): Prisma__user_otpClient<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_otps.
     * @param {user_otpCreateManyArgs} args - Arguments to create many User_otps.
     * @example
     * // Create many User_otps
     * const user_otp = await prisma.user_otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_otpCreateManyArgs>(args?: SelectSubset<T, user_otpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_otps and returns the data saved in the database.
     * @param {user_otpCreateManyAndReturnArgs} args - Arguments to create many User_otps.
     * @example
     * // Create many User_otps
     * const user_otp = await prisma.user_otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_otps and only return the `id`
     * const user_otpWithIdOnly = await prisma.user_otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_otpCreateManyAndReturnArgs>(args?: SelectSubset<T, user_otpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_otp.
     * @param {user_otpDeleteArgs} args - Arguments to delete one User_otp.
     * @example
     * // Delete one User_otp
     * const User_otp = await prisma.user_otp.delete({
     *   where: {
     *     // ... filter to delete one User_otp
     *   }
     * })
     * 
     */
    delete<T extends user_otpDeleteArgs>(args: SelectSubset<T, user_otpDeleteArgs<ExtArgs>>): Prisma__user_otpClient<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_otp.
     * @param {user_otpUpdateArgs} args - Arguments to update one User_otp.
     * @example
     * // Update one User_otp
     * const user_otp = await prisma.user_otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_otpUpdateArgs>(args: SelectSubset<T, user_otpUpdateArgs<ExtArgs>>): Prisma__user_otpClient<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_otps.
     * @param {user_otpDeleteManyArgs} args - Arguments to filter User_otps to delete.
     * @example
     * // Delete a few User_otps
     * const { count } = await prisma.user_otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_otpDeleteManyArgs>(args?: SelectSubset<T, user_otpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_otpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_otps
     * const user_otp = await prisma.user_otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_otpUpdateManyArgs>(args: SelectSubset<T, user_otpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_otps and returns the data updated in the database.
     * @param {user_otpUpdateManyAndReturnArgs} args - Arguments to update many User_otps.
     * @example
     * // Update many User_otps
     * const user_otp = await prisma.user_otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_otps and only return the `id`
     * const user_otpWithIdOnly = await prisma.user_otp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_otpUpdateManyAndReturnArgs>(args: SelectSubset<T, user_otpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_otp.
     * @param {user_otpUpsertArgs} args - Arguments to update or create a User_otp.
     * @example
     * // Update or create a User_otp
     * const user_otp = await prisma.user_otp.upsert({
     *   create: {
     *     // ... data to create a User_otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_otp we want to update
     *   }
     * })
     */
    upsert<T extends user_otpUpsertArgs>(args: SelectSubset<T, user_otpUpsertArgs<ExtArgs>>): Prisma__user_otpClient<$Result.GetResult<Prisma.$user_otpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_otpCountArgs} args - Arguments to filter User_otps to count.
     * @example
     * // Count the number of User_otps
     * const count = await prisma.user_otp.count({
     *   where: {
     *     // ... the filter for the User_otps we want to count
     *   }
     * })
    **/
    count<T extends user_otpCountArgs>(
      args?: Subset<T, user_otpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_otpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_otpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_otpAggregateArgs>(args: Subset<T, User_otpAggregateArgs>): Prisma.PrismaPromise<GetUser_otpAggregateType<T>>

    /**
     * Group by User_otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_otpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_otpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_otpGroupByArgs['orderBy'] }
        : { orderBy?: user_otpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_otpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_otpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_otp model
   */
  readonly fields: user_otpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_otpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_otp model
   */
  interface user_otpFieldRefs {
    readonly id: FieldRef<"user_otp", 'String'>
    readonly created_at: FieldRef<"user_otp", 'DateTime'>
    readonly expires_at: FieldRef<"user_otp", 'DateTime'>
    readonly otp: FieldRef<"user_otp", 'String'>
    readonly user_id: FieldRef<"user_otp", 'String'>
    readonly otp_type: FieldRef<"user_otp", 'USER_OTP_TYPE'>
  }
    

  // Custom InputTypes
  /**
   * user_otp findUnique
   */
  export type user_otpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * Filter, which user_otp to fetch.
     */
    where: user_otpWhereUniqueInput
  }

  /**
   * user_otp findUniqueOrThrow
   */
  export type user_otpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * Filter, which user_otp to fetch.
     */
    where: user_otpWhereUniqueInput
  }

  /**
   * user_otp findFirst
   */
  export type user_otpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * Filter, which user_otp to fetch.
     */
    where?: user_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_otps to fetch.
     */
    orderBy?: user_otpOrderByWithRelationInput | user_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_otps.
     */
    cursor?: user_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_otps.
     */
    distinct?: User_otpScalarFieldEnum | User_otpScalarFieldEnum[]
  }

  /**
   * user_otp findFirstOrThrow
   */
  export type user_otpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * Filter, which user_otp to fetch.
     */
    where?: user_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_otps to fetch.
     */
    orderBy?: user_otpOrderByWithRelationInput | user_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_otps.
     */
    cursor?: user_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_otps.
     */
    distinct?: User_otpScalarFieldEnum | User_otpScalarFieldEnum[]
  }

  /**
   * user_otp findMany
   */
  export type user_otpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * Filter, which user_otps to fetch.
     */
    where?: user_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_otps to fetch.
     */
    orderBy?: user_otpOrderByWithRelationInput | user_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_otps.
     */
    cursor?: user_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_otps.
     */
    skip?: number
    distinct?: User_otpScalarFieldEnum | User_otpScalarFieldEnum[]
  }

  /**
   * user_otp create
   */
  export type user_otpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * The data needed to create a user_otp.
     */
    data: XOR<user_otpCreateInput, user_otpUncheckedCreateInput>
  }

  /**
   * user_otp createMany
   */
  export type user_otpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_otps.
     */
    data: user_otpCreateManyInput | user_otpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_otp createManyAndReturn
   */
  export type user_otpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * The data used to create many user_otps.
     */
    data: user_otpCreateManyInput | user_otpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_otp update
   */
  export type user_otpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * The data needed to update a user_otp.
     */
    data: XOR<user_otpUpdateInput, user_otpUncheckedUpdateInput>
    /**
     * Choose, which user_otp to update.
     */
    where: user_otpWhereUniqueInput
  }

  /**
   * user_otp updateMany
   */
  export type user_otpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_otps.
     */
    data: XOR<user_otpUpdateManyMutationInput, user_otpUncheckedUpdateManyInput>
    /**
     * Filter which user_otps to update
     */
    where?: user_otpWhereInput
    /**
     * Limit how many user_otps to update.
     */
    limit?: number
  }

  /**
   * user_otp updateManyAndReturn
   */
  export type user_otpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * The data used to update user_otps.
     */
    data: XOR<user_otpUpdateManyMutationInput, user_otpUncheckedUpdateManyInput>
    /**
     * Filter which user_otps to update
     */
    where?: user_otpWhereInput
    /**
     * Limit how many user_otps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_otp upsert
   */
  export type user_otpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * The filter to search for the user_otp to update in case it exists.
     */
    where: user_otpWhereUniqueInput
    /**
     * In case the user_otp found by the `where` argument doesn't exist, create a new user_otp with this data.
     */
    create: XOR<user_otpCreateInput, user_otpUncheckedCreateInput>
    /**
     * In case the user_otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_otpUpdateInput, user_otpUncheckedUpdateInput>
  }

  /**
   * user_otp delete
   */
  export type user_otpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
    /**
     * Filter which user_otp to delete.
     */
    where: user_otpWhereUniqueInput
  }

  /**
   * user_otp deleteMany
   */
  export type user_otpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_otps to delete
     */
    where?: user_otpWhereInput
    /**
     * Limit how many user_otps to delete.
     */
    limit?: number
  }

  /**
   * user_otp without action
   */
  export type user_otpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_otp
     */
    select?: user_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_otp
     */
    omit?: user_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_otpInclude<ExtArgs> | null
  }


  /**
   * Model webhook
   */

  export type AggregateWebhook = {
    _count: WebhookCountAggregateOutputType | null
    _avg: WebhookAvgAggregateOutputType | null
    _sum: WebhookSumAggregateOutputType | null
    _min: WebhookMinAggregateOutputType | null
    _max: WebhookMaxAggregateOutputType | null
  }

  export type WebhookAvgAggregateOutputType = {
    failureCount: number | null
  }

  export type WebhookSumAggregateOutputType = {
    failureCount: number | null
  }

  export type WebhookMinAggregateOutputType = {
    id: string | null
    url: string | null
    description: string | null
    isActive: boolean | null
    failureCount: number | null
    lastFailureReason: string | null
    lastSuccessfulDelivery: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookMaxAggregateOutputType = {
    id: string | null
    url: string | null
    description: string | null
    isActive: boolean | null
    failureCount: number | null
    lastFailureReason: string | null
    lastSuccessfulDelivery: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookCountAggregateOutputType = {
    id: number
    url: number
    description: number
    isActive: number
    failureCount: number
    lastFailureReason: number
    lastSuccessfulDelivery: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebhookAvgAggregateInputType = {
    failureCount?: true
  }

  export type WebhookSumAggregateInputType = {
    failureCount?: true
  }

  export type WebhookMinAggregateInputType = {
    id?: true
    url?: true
    description?: true
    isActive?: true
    failureCount?: true
    lastFailureReason?: true
    lastSuccessfulDelivery?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookMaxAggregateInputType = {
    id?: true
    url?: true
    description?: true
    isActive?: true
    failureCount?: true
    lastFailureReason?: true
    lastSuccessfulDelivery?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookCountAggregateInputType = {
    id?: true
    url?: true
    description?: true
    isActive?: true
    failureCount?: true
    lastFailureReason?: true
    lastSuccessfulDelivery?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webhook to aggregate.
     */
    where?: webhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhooks to fetch.
     */
    orderBy?: webhookOrderByWithRelationInput | webhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webhooks
    **/
    _count?: true | WebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookMaxAggregateInputType
  }

  export type GetWebhookAggregateType<T extends WebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhook[P]>
      : GetScalarType<T[P], AggregateWebhook[P]>
  }




  export type webhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webhookWhereInput
    orderBy?: webhookOrderByWithAggregationInput | webhookOrderByWithAggregationInput[]
    by: WebhookScalarFieldEnum[] | WebhookScalarFieldEnum
    having?: webhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookCountAggregateInputType | true
    _avg?: WebhookAvgAggregateInputType
    _sum?: WebhookSumAggregateInputType
    _min?: WebhookMinAggregateInputType
    _max?: WebhookMaxAggregateInputType
  }

  export type WebhookGroupByOutputType = {
    id: string
    url: string
    description: string
    isActive: boolean
    failureCount: number
    lastFailureReason: string | null
    lastSuccessfulDelivery: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WebhookCountAggregateOutputType | null
    _avg: WebhookAvgAggregateOutputType | null
    _sum: WebhookSumAggregateOutputType | null
    _min: WebhookMinAggregateOutputType | null
    _max: WebhookMaxAggregateOutputType | null
  }

  type GetWebhookGroupByPayload<T extends webhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookGroupByOutputType[P]>
        }
      >
    >


  export type webhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    isActive?: boolean
    failureCount?: boolean
    lastFailureReason?: boolean
    lastSuccessfulDelivery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhook"]>

  export type webhookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    isActive?: boolean
    failureCount?: boolean
    lastFailureReason?: boolean
    lastSuccessfulDelivery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhook"]>

  export type webhookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    isActive?: boolean
    failureCount?: boolean
    lastFailureReason?: boolean
    lastSuccessfulDelivery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhook"]>

  export type webhookSelectScalar = {
    id?: boolean
    url?: boolean
    description?: boolean
    isActive?: boolean
    failureCount?: boolean
    lastFailureReason?: boolean
    lastSuccessfulDelivery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type webhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "description" | "isActive" | "failureCount" | "lastFailureReason" | "lastSuccessfulDelivery" | "createdAt" | "updatedAt", ExtArgs["result"]["webhook"]>

  export type $webhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webhook"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      description: string
      isActive: boolean
      failureCount: number
      lastFailureReason: string | null
      lastSuccessfulDelivery: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webhook"]>
    composites: {}
  }

  type webhookGetPayload<S extends boolean | null | undefined | webhookDefaultArgs> = $Result.GetResult<Prisma.$webhookPayload, S>

  type webhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<webhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookCountAggregateInputType | true
    }

  export interface webhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webhook'], meta: { name: 'webhook' } }
    /**
     * Find zero or one Webhook that matches the filter.
     * @param {webhookFindUniqueArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webhookFindUniqueArgs>(args: SelectSubset<T, webhookFindUniqueArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {webhookFindUniqueOrThrowArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webhookFindUniqueOrThrowArgs>(args: SelectSubset<T, webhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookFindFirstArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webhookFindFirstArgs>(args?: SelectSubset<T, webhookFindFirstArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookFindFirstOrThrowArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webhookFindFirstOrThrowArgs>(args?: SelectSubset<T, webhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webhooks
     * const webhooks = await prisma.webhook.findMany()
     * 
     * // Get first 10 Webhooks
     * const webhooks = await prisma.webhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookWithIdOnly = await prisma.webhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webhookFindManyArgs>(args?: SelectSubset<T, webhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webhook.
     * @param {webhookCreateArgs} args - Arguments to create a Webhook.
     * @example
     * // Create one Webhook
     * const Webhook = await prisma.webhook.create({
     *   data: {
     *     // ... data to create a Webhook
     *   }
     * })
     * 
     */
    create<T extends webhookCreateArgs>(args: SelectSubset<T, webhookCreateArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webhooks.
     * @param {webhookCreateManyArgs} args - Arguments to create many Webhooks.
     * @example
     * // Create many Webhooks
     * const webhook = await prisma.webhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webhookCreateManyArgs>(args?: SelectSubset<T, webhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webhooks and returns the data saved in the database.
     * @param {webhookCreateManyAndReturnArgs} args - Arguments to create many Webhooks.
     * @example
     * // Create many Webhooks
     * const webhook = await prisma.webhook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webhooks and only return the `id`
     * const webhookWithIdOnly = await prisma.webhook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends webhookCreateManyAndReturnArgs>(args?: SelectSubset<T, webhookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webhook.
     * @param {webhookDeleteArgs} args - Arguments to delete one Webhook.
     * @example
     * // Delete one Webhook
     * const Webhook = await prisma.webhook.delete({
     *   where: {
     *     // ... filter to delete one Webhook
     *   }
     * })
     * 
     */
    delete<T extends webhookDeleteArgs>(args: SelectSubset<T, webhookDeleteArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webhook.
     * @param {webhookUpdateArgs} args - Arguments to update one Webhook.
     * @example
     * // Update one Webhook
     * const webhook = await prisma.webhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webhookUpdateArgs>(args: SelectSubset<T, webhookUpdateArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webhooks.
     * @param {webhookDeleteManyArgs} args - Arguments to filter Webhooks to delete.
     * @example
     * // Delete a few Webhooks
     * const { count } = await prisma.webhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webhookDeleteManyArgs>(args?: SelectSubset<T, webhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webhooks
     * const webhook = await prisma.webhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webhookUpdateManyArgs>(args: SelectSubset<T, webhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhooks and returns the data updated in the database.
     * @param {webhookUpdateManyAndReturnArgs} args - Arguments to update many Webhooks.
     * @example
     * // Update many Webhooks
     * const webhook = await prisma.webhook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webhooks and only return the `id`
     * const webhookWithIdOnly = await prisma.webhook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends webhookUpdateManyAndReturnArgs>(args: SelectSubset<T, webhookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webhook.
     * @param {webhookUpsertArgs} args - Arguments to update or create a Webhook.
     * @example
     * // Update or create a Webhook
     * const webhook = await prisma.webhook.upsert({
     *   create: {
     *     // ... data to create a Webhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webhook we want to update
     *   }
     * })
     */
    upsert<T extends webhookUpsertArgs>(args: SelectSubset<T, webhookUpsertArgs<ExtArgs>>): Prisma__webhookClient<$Result.GetResult<Prisma.$webhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookCountArgs} args - Arguments to filter Webhooks to count.
     * @example
     * // Count the number of Webhooks
     * const count = await prisma.webhook.count({
     *   where: {
     *     // ... the filter for the Webhooks we want to count
     *   }
     * })
    **/
    count<T extends webhookCountArgs>(
      args?: Subset<T, webhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookAggregateArgs>(args: Subset<T, WebhookAggregateArgs>): Prisma.PrismaPromise<GetWebhookAggregateType<T>>

    /**
     * Group by Webhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends webhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webhookGroupByArgs['orderBy'] }
        : { orderBy?: webhookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, webhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webhook model
   */
  readonly fields: webhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the webhook model
   */
  interface webhookFieldRefs {
    readonly id: FieldRef<"webhook", 'String'>
    readonly url: FieldRef<"webhook", 'String'>
    readonly description: FieldRef<"webhook", 'String'>
    readonly isActive: FieldRef<"webhook", 'Boolean'>
    readonly failureCount: FieldRef<"webhook", 'Int'>
    readonly lastFailureReason: FieldRef<"webhook", 'String'>
    readonly lastSuccessfulDelivery: FieldRef<"webhook", 'DateTime'>
    readonly createdAt: FieldRef<"webhook", 'DateTime'>
    readonly updatedAt: FieldRef<"webhook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * webhook findUnique
   */
  export type webhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Filter, which webhook to fetch.
     */
    where: webhookWhereUniqueInput
  }

  /**
   * webhook findUniqueOrThrow
   */
  export type webhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Filter, which webhook to fetch.
     */
    where: webhookWhereUniqueInput
  }

  /**
   * webhook findFirst
   */
  export type webhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Filter, which webhook to fetch.
     */
    where?: webhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhooks to fetch.
     */
    orderBy?: webhookOrderByWithRelationInput | webhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webhooks.
     */
    cursor?: webhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * webhook findFirstOrThrow
   */
  export type webhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Filter, which webhook to fetch.
     */
    where?: webhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhooks to fetch.
     */
    orderBy?: webhookOrderByWithRelationInput | webhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webhooks.
     */
    cursor?: webhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * webhook findMany
   */
  export type webhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Filter, which webhooks to fetch.
     */
    where?: webhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhooks to fetch.
     */
    orderBy?: webhookOrderByWithRelationInput | webhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webhooks.
     */
    cursor?: webhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhooks.
     */
    skip?: number
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * webhook create
   */
  export type webhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * The data needed to create a webhook.
     */
    data: XOR<webhookCreateInput, webhookUncheckedCreateInput>
  }

  /**
   * webhook createMany
   */
  export type webhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webhooks.
     */
    data: webhookCreateManyInput | webhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * webhook createManyAndReturn
   */
  export type webhookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * The data used to create many webhooks.
     */
    data: webhookCreateManyInput | webhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * webhook update
   */
  export type webhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * The data needed to update a webhook.
     */
    data: XOR<webhookUpdateInput, webhookUncheckedUpdateInput>
    /**
     * Choose, which webhook to update.
     */
    where: webhookWhereUniqueInput
  }

  /**
   * webhook updateMany
   */
  export type webhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webhooks.
     */
    data: XOR<webhookUpdateManyMutationInput, webhookUncheckedUpdateManyInput>
    /**
     * Filter which webhooks to update
     */
    where?: webhookWhereInput
    /**
     * Limit how many webhooks to update.
     */
    limit?: number
  }

  /**
   * webhook updateManyAndReturn
   */
  export type webhookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * The data used to update webhooks.
     */
    data: XOR<webhookUpdateManyMutationInput, webhookUncheckedUpdateManyInput>
    /**
     * Filter which webhooks to update
     */
    where?: webhookWhereInput
    /**
     * Limit how many webhooks to update.
     */
    limit?: number
  }

  /**
   * webhook upsert
   */
  export type webhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * The filter to search for the webhook to update in case it exists.
     */
    where: webhookWhereUniqueInput
    /**
     * In case the webhook found by the `where` argument doesn't exist, create a new webhook with this data.
     */
    create: XOR<webhookCreateInput, webhookUncheckedCreateInput>
    /**
     * In case the webhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webhookUpdateInput, webhookUncheckedUpdateInput>
  }

  /**
   * webhook delete
   */
  export type webhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
    /**
     * Filter which webhook to delete.
     */
    where: webhookWhereUniqueInput
  }

  /**
   * webhook deleteMany
   */
  export type webhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webhooks to delete
     */
    where?: webhookWhereInput
    /**
     * Limit how many webhooks to delete.
     */
    limit?: number
  }

  /**
   * webhook without action
   */
  export type webhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook
     */
    select?: webhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook
     */
    omit?: webhookOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    photo_url: 'photo_url',
    name: 'name',
    email: 'email',
    password: 'password',
    type: 'type',
    total_millage: 'total_millage',
    total_coins: 'total_coins',
    available_coins: 'available_coins',
    email_verified: 'email_verified',
    profile_verified: 'profile_verified',
    referral_code: 'referral_code',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_otpScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    expires_at: 'expires_at',
    otp: 'otp',
    user_id: 'user_id',
    otp_type: 'otp_type'
  };

  export type User_otpScalarFieldEnum = (typeof User_otpScalarFieldEnum)[keyof typeof User_otpScalarFieldEnum]


  export const WebhookScalarFieldEnum: {
    id: 'id',
    url: 'url',
    description: 'description',
    isActive: 'isActive',
    failureCount: 'failureCount',
    lastFailureReason: 'lastFailureReason',
    lastSuccessfulDelivery: 'lastSuccessfulDelivery',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebhookScalarFieldEnum = (typeof WebhookScalarFieldEnum)[keyof typeof WebhookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'USER_TYPE'
   */
  export type EnumUSER_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_TYPE'>
    


  /**
   * Reference to a field of type 'USER_TYPE[]'
   */
  export type ListEnumUSER_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_TYPE[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'USER_OTP_TYPE'
   */
  export type EnumUSER_OTP_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_OTP_TYPE'>
    


  /**
   * Reference to a field of type 'USER_OTP_TYPE[]'
   */
  export type ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_OTP_TYPE[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    photo_url?: StringNullableFilter<"user"> | string | null
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    type?: EnumUSER_TYPEFilter<"user"> | $Enums.USER_TYPE
    total_millage?: FloatFilter<"user"> | number
    total_coins?: FloatFilter<"user"> | number
    available_coins?: FloatFilter<"user"> | number
    email_verified?: BoolFilter<"user"> | boolean
    profile_verified?: BoolFilter<"user"> | boolean
    referral_code?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    otps?: User_otpListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    total_millage?: SortOrder
    total_coins?: SortOrder
    available_coins?: SortOrder
    email_verified?: SortOrder
    profile_verified?: SortOrder
    referral_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    otps?: user_otpOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    photo_url?: StringNullableFilter<"user"> | string | null
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    type?: EnumUSER_TYPEFilter<"user"> | $Enums.USER_TYPE
    total_millage?: FloatFilter<"user"> | number
    total_coins?: FloatFilter<"user"> | number
    available_coins?: FloatFilter<"user"> | number
    email_verified?: BoolFilter<"user"> | boolean
    profile_verified?: BoolFilter<"user"> | boolean
    referral_code?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    otps?: User_otpListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    total_millage?: SortOrder
    total_coins?: SortOrder
    available_coins?: SortOrder
    email_verified?: SortOrder
    profile_verified?: SortOrder
    referral_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    photo_url?: StringNullableWithAggregatesFilter<"user"> | string | null
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    type?: EnumUSER_TYPEWithAggregatesFilter<"user"> | $Enums.USER_TYPE
    total_millage?: FloatWithAggregatesFilter<"user"> | number
    total_coins?: FloatWithAggregatesFilter<"user"> | number
    available_coins?: FloatWithAggregatesFilter<"user"> | number
    email_verified?: BoolWithAggregatesFilter<"user"> | boolean
    profile_verified?: BoolWithAggregatesFilter<"user"> | boolean
    referral_code?: StringNullableWithAggregatesFilter<"user"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type user_otpWhereInput = {
    AND?: user_otpWhereInput | user_otpWhereInput[]
    OR?: user_otpWhereInput[]
    NOT?: user_otpWhereInput | user_otpWhereInput[]
    id?: StringFilter<"user_otp"> | string
    created_at?: DateTimeFilter<"user_otp"> | Date | string
    expires_at?: DateTimeFilter<"user_otp"> | Date | string
    otp?: StringFilter<"user_otp"> | string
    user_id?: StringFilter<"user_otp"> | string
    otp_type?: EnumUSER_OTP_TYPEFilter<"user_otp"> | $Enums.USER_OTP_TYPE
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_otpOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    otp?: SortOrder
    user_id?: SortOrder
    otp_type?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type user_otpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_otpWhereInput | user_otpWhereInput[]
    OR?: user_otpWhereInput[]
    NOT?: user_otpWhereInput | user_otpWhereInput[]
    created_at?: DateTimeFilter<"user_otp"> | Date | string
    expires_at?: DateTimeFilter<"user_otp"> | Date | string
    otp?: StringFilter<"user_otp"> | string
    user_id?: StringFilter<"user_otp"> | string
    otp_type?: EnumUSER_OTP_TYPEFilter<"user_otp"> | $Enums.USER_OTP_TYPE
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type user_otpOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    otp?: SortOrder
    user_id?: SortOrder
    otp_type?: SortOrder
    _count?: user_otpCountOrderByAggregateInput
    _max?: user_otpMaxOrderByAggregateInput
    _min?: user_otpMinOrderByAggregateInput
  }

  export type user_otpScalarWhereWithAggregatesInput = {
    AND?: user_otpScalarWhereWithAggregatesInput | user_otpScalarWhereWithAggregatesInput[]
    OR?: user_otpScalarWhereWithAggregatesInput[]
    NOT?: user_otpScalarWhereWithAggregatesInput | user_otpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_otp"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_otp"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"user_otp"> | Date | string
    otp?: StringWithAggregatesFilter<"user_otp"> | string
    user_id?: StringWithAggregatesFilter<"user_otp"> | string
    otp_type?: EnumUSER_OTP_TYPEWithAggregatesFilter<"user_otp"> | $Enums.USER_OTP_TYPE
  }

  export type webhookWhereInput = {
    AND?: webhookWhereInput | webhookWhereInput[]
    OR?: webhookWhereInput[]
    NOT?: webhookWhereInput | webhookWhereInput[]
    id?: StringFilter<"webhook"> | string
    url?: StringFilter<"webhook"> | string
    description?: StringFilter<"webhook"> | string
    isActive?: BoolFilter<"webhook"> | boolean
    failureCount?: IntFilter<"webhook"> | number
    lastFailureReason?: StringNullableFilter<"webhook"> | string | null
    lastSuccessfulDelivery?: DateTimeNullableFilter<"webhook"> | Date | string | null
    createdAt?: DateTimeFilter<"webhook"> | Date | string
    updatedAt?: DateTimeFilter<"webhook"> | Date | string
  }

  export type webhookOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastFailureReason?: SortOrderInput | SortOrder
    lastSuccessfulDelivery?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type webhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: webhookWhereInput | webhookWhereInput[]
    OR?: webhookWhereInput[]
    NOT?: webhookWhereInput | webhookWhereInput[]
    url?: StringFilter<"webhook"> | string
    description?: StringFilter<"webhook"> | string
    isActive?: BoolFilter<"webhook"> | boolean
    failureCount?: IntFilter<"webhook"> | number
    lastFailureReason?: StringNullableFilter<"webhook"> | string | null
    lastSuccessfulDelivery?: DateTimeNullableFilter<"webhook"> | Date | string | null
    createdAt?: DateTimeFilter<"webhook"> | Date | string
    updatedAt?: DateTimeFilter<"webhook"> | Date | string
  }, "id">

  export type webhookOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastFailureReason?: SortOrderInput | SortOrder
    lastSuccessfulDelivery?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: webhookCountOrderByAggregateInput
    _avg?: webhookAvgOrderByAggregateInput
    _max?: webhookMaxOrderByAggregateInput
    _min?: webhookMinOrderByAggregateInput
    _sum?: webhookSumOrderByAggregateInput
  }

  export type webhookScalarWhereWithAggregatesInput = {
    AND?: webhookScalarWhereWithAggregatesInput | webhookScalarWhereWithAggregatesInput[]
    OR?: webhookScalarWhereWithAggregatesInput[]
    NOT?: webhookScalarWhereWithAggregatesInput | webhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"webhook"> | string
    url?: StringWithAggregatesFilter<"webhook"> | string
    description?: StringWithAggregatesFilter<"webhook"> | string
    isActive?: BoolWithAggregatesFilter<"webhook"> | boolean
    failureCount?: IntWithAggregatesFilter<"webhook"> | number
    lastFailureReason?: StringNullableWithAggregatesFilter<"webhook"> | string | null
    lastSuccessfulDelivery?: DateTimeNullableWithAggregatesFilter<"webhook"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"webhook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"webhook"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    photo_url?: string | null
    name: string
    email: string
    password: string
    type?: $Enums.USER_TYPE
    total_millage?: number
    total_coins?: number
    available_coins?: number
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    otps?: user_otpCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    photo_url?: string | null
    name: string
    email: string
    password: string
    type?: $Enums.USER_TYPE
    total_millage?: number
    total_coins?: number
    available_coins?: number
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    otps?: user_otpUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUSER_TYPEFieldUpdateOperationsInput | $Enums.USER_TYPE
    total_millage?: FloatFieldUpdateOperationsInput | number
    total_coins?: FloatFieldUpdateOperationsInput | number
    available_coins?: FloatFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_verified?: BoolFieldUpdateOperationsInput | boolean
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: user_otpUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUSER_TYPEFieldUpdateOperationsInput | $Enums.USER_TYPE
    total_millage?: FloatFieldUpdateOperationsInput | number
    total_coins?: FloatFieldUpdateOperationsInput | number
    available_coins?: FloatFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_verified?: BoolFieldUpdateOperationsInput | boolean
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: user_otpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    photo_url?: string | null
    name: string
    email: string
    password: string
    type?: $Enums.USER_TYPE
    total_millage?: number
    total_coins?: number
    available_coins?: number
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUSER_TYPEFieldUpdateOperationsInput | $Enums.USER_TYPE
    total_millage?: FloatFieldUpdateOperationsInput | number
    total_coins?: FloatFieldUpdateOperationsInput | number
    available_coins?: FloatFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_verified?: BoolFieldUpdateOperationsInput | boolean
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUSER_TYPEFieldUpdateOperationsInput | $Enums.USER_TYPE
    total_millage?: FloatFieldUpdateOperationsInput | number
    total_coins?: FloatFieldUpdateOperationsInput | number
    available_coins?: FloatFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_verified?: BoolFieldUpdateOperationsInput | boolean
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_otpCreateInput = {
    id?: string
    created_at?: Date | string
    expires_at: Date | string
    otp: string
    otp_type: $Enums.USER_OTP_TYPE
    user: userCreateNestedOneWithoutOtpsInput
  }

  export type user_otpUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    expires_at: Date | string
    otp: string
    user_id: string
    otp_type: $Enums.USER_OTP_TYPE
  }

  export type user_otpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumUSER_OTP_TYPEFieldUpdateOperationsInput | $Enums.USER_OTP_TYPE
    user?: userUpdateOneRequiredWithoutOtpsNestedInput
  }

  export type user_otpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumUSER_OTP_TYPEFieldUpdateOperationsInput | $Enums.USER_OTP_TYPE
  }

  export type user_otpCreateManyInput = {
    id?: string
    created_at?: Date | string
    expires_at: Date | string
    otp: string
    user_id: string
    otp_type: $Enums.USER_OTP_TYPE
  }

  export type user_otpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumUSER_OTP_TYPEFieldUpdateOperationsInput | $Enums.USER_OTP_TYPE
  }

  export type user_otpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumUSER_OTP_TYPEFieldUpdateOperationsInput | $Enums.USER_OTP_TYPE
  }

  export type webhookCreateInput = {
    id?: string
    url: string
    description: string
    isActive?: boolean
    failureCount?: number
    lastFailureReason?: string | null
    lastSuccessfulDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type webhookUncheckedCreateInput = {
    id?: string
    url: string
    description: string
    isActive?: boolean
    failureCount?: number
    lastFailureReason?: string | null
    lastSuccessfulDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type webhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastFailureReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSuccessfulDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastFailureReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSuccessfulDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhookCreateManyInput = {
    id?: string
    url: string
    description: string
    isActive?: boolean
    failureCount?: number
    lastFailureReason?: string | null
    lastSuccessfulDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type webhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastFailureReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSuccessfulDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastFailureReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSuccessfulDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUSER_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_TYPE | EnumUSER_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_TYPE[] | ListEnumUSER_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_TYPE[] | ListEnumUSER_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_TYPEFilter<$PrismaModel> | $Enums.USER_TYPE
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_otpListRelationFilter = {
    every?: user_otpWhereInput
    some?: user_otpWhereInput
    none?: user_otpWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_otpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    photo_url?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    total_millage?: SortOrder
    total_coins?: SortOrder
    available_coins?: SortOrder
    email_verified?: SortOrder
    profile_verified?: SortOrder
    referral_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    total_millage?: SortOrder
    total_coins?: SortOrder
    available_coins?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    photo_url?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    total_millage?: SortOrder
    total_coins?: SortOrder
    available_coins?: SortOrder
    email_verified?: SortOrder
    profile_verified?: SortOrder
    referral_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    photo_url?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    total_millage?: SortOrder
    total_coins?: SortOrder
    available_coins?: SortOrder
    email_verified?: SortOrder
    profile_verified?: SortOrder
    referral_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    total_millage?: SortOrder
    total_coins?: SortOrder
    available_coins?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUSER_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_TYPE | EnumUSER_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_TYPE[] | ListEnumUSER_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_TYPE[] | ListEnumUSER_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.USER_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_TYPEFilter<$PrismaModel>
    _max?: NestedEnumUSER_TYPEFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUSER_OTP_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_OTP_TYPE | EnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_OTP_TYPE[] | ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_OTP_TYPE[] | ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_OTP_TYPEFilter<$PrismaModel> | $Enums.USER_OTP_TYPE
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type user_otpCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    otp?: SortOrder
    user_id?: SortOrder
    otp_type?: SortOrder
  }

  export type user_otpMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    otp?: SortOrder
    user_id?: SortOrder
    otp_type?: SortOrder
  }

  export type user_otpMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    otp?: SortOrder
    user_id?: SortOrder
    otp_type?: SortOrder
  }

  export type EnumUSER_OTP_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_OTP_TYPE | EnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_OTP_TYPE[] | ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_OTP_TYPE[] | ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_OTP_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.USER_OTP_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_OTP_TYPEFilter<$PrismaModel>
    _max?: NestedEnumUSER_OTP_TYPEFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type webhookCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastFailureReason?: SortOrder
    lastSuccessfulDelivery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type webhookAvgOrderByAggregateInput = {
    failureCount?: SortOrder
  }

  export type webhookMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastFailureReason?: SortOrder
    lastSuccessfulDelivery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type webhookMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastFailureReason?: SortOrder
    lastSuccessfulDelivery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type webhookSumOrderByAggregateInput = {
    failureCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type user_otpCreateNestedManyWithoutUserInput = {
    create?: XOR<user_otpCreateWithoutUserInput, user_otpUncheckedCreateWithoutUserInput> | user_otpCreateWithoutUserInput[] | user_otpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_otpCreateOrConnectWithoutUserInput | user_otpCreateOrConnectWithoutUserInput[]
    createMany?: user_otpCreateManyUserInputEnvelope
    connect?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
  }

  export type user_otpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_otpCreateWithoutUserInput, user_otpUncheckedCreateWithoutUserInput> | user_otpCreateWithoutUserInput[] | user_otpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_otpCreateOrConnectWithoutUserInput | user_otpCreateOrConnectWithoutUserInput[]
    createMany?: user_otpCreateManyUserInputEnvelope
    connect?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUSER_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.USER_TYPE
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_otpUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_otpCreateWithoutUserInput, user_otpUncheckedCreateWithoutUserInput> | user_otpCreateWithoutUserInput[] | user_otpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_otpCreateOrConnectWithoutUserInput | user_otpCreateOrConnectWithoutUserInput[]
    upsert?: user_otpUpsertWithWhereUniqueWithoutUserInput | user_otpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_otpCreateManyUserInputEnvelope
    set?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
    disconnect?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
    delete?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
    connect?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
    update?: user_otpUpdateWithWhereUniqueWithoutUserInput | user_otpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_otpUpdateManyWithWhereWithoutUserInput | user_otpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_otpScalarWhereInput | user_otpScalarWhereInput[]
  }

  export type user_otpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_otpCreateWithoutUserInput, user_otpUncheckedCreateWithoutUserInput> | user_otpCreateWithoutUserInput[] | user_otpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_otpCreateOrConnectWithoutUserInput | user_otpCreateOrConnectWithoutUserInput[]
    upsert?: user_otpUpsertWithWhereUniqueWithoutUserInput | user_otpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_otpCreateManyUserInputEnvelope
    set?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
    disconnect?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
    delete?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
    connect?: user_otpWhereUniqueInput | user_otpWhereUniqueInput[]
    update?: user_otpUpdateWithWhereUniqueWithoutUserInput | user_otpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_otpUpdateManyWithWhereWithoutUserInput | user_otpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_otpScalarWhereInput | user_otpScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutOtpsInput = {
    create?: XOR<userCreateWithoutOtpsInput, userUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: userCreateOrConnectWithoutOtpsInput
    connect?: userWhereUniqueInput
  }

  export type EnumUSER_OTP_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.USER_OTP_TYPE
  }

  export type userUpdateOneRequiredWithoutOtpsNestedInput = {
    create?: XOR<userCreateWithoutOtpsInput, userUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: userCreateOrConnectWithoutOtpsInput
    upsert?: userUpsertWithoutOtpsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOtpsInput, userUpdateWithoutOtpsInput>, userUncheckedUpdateWithoutOtpsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUSER_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_TYPE | EnumUSER_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_TYPE[] | ListEnumUSER_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_TYPE[] | ListEnumUSER_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_TYPEFilter<$PrismaModel> | $Enums.USER_TYPE
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUSER_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_TYPE | EnumUSER_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_TYPE[] | ListEnumUSER_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_TYPE[] | ListEnumUSER_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.USER_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_TYPEFilter<$PrismaModel>
    _max?: NestedEnumUSER_TYPEFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUSER_OTP_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_OTP_TYPE | EnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_OTP_TYPE[] | ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_OTP_TYPE[] | ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_OTP_TYPEFilter<$PrismaModel> | $Enums.USER_OTP_TYPE
  }

  export type NestedEnumUSER_OTP_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_OTP_TYPE | EnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_OTP_TYPE[] | ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_OTP_TYPE[] | ListEnumUSER_OTP_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_OTP_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.USER_OTP_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_OTP_TYPEFilter<$PrismaModel>
    _max?: NestedEnumUSER_OTP_TYPEFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type user_otpCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    expires_at: Date | string
    otp: string
    otp_type: $Enums.USER_OTP_TYPE
  }

  export type user_otpUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    expires_at: Date | string
    otp: string
    otp_type: $Enums.USER_OTP_TYPE
  }

  export type user_otpCreateOrConnectWithoutUserInput = {
    where: user_otpWhereUniqueInput
    create: XOR<user_otpCreateWithoutUserInput, user_otpUncheckedCreateWithoutUserInput>
  }

  export type user_otpCreateManyUserInputEnvelope = {
    data: user_otpCreateManyUserInput | user_otpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_otpUpsertWithWhereUniqueWithoutUserInput = {
    where: user_otpWhereUniqueInput
    update: XOR<user_otpUpdateWithoutUserInput, user_otpUncheckedUpdateWithoutUserInput>
    create: XOR<user_otpCreateWithoutUserInput, user_otpUncheckedCreateWithoutUserInput>
  }

  export type user_otpUpdateWithWhereUniqueWithoutUserInput = {
    where: user_otpWhereUniqueInput
    data: XOR<user_otpUpdateWithoutUserInput, user_otpUncheckedUpdateWithoutUserInput>
  }

  export type user_otpUpdateManyWithWhereWithoutUserInput = {
    where: user_otpScalarWhereInput
    data: XOR<user_otpUpdateManyMutationInput, user_otpUncheckedUpdateManyWithoutUserInput>
  }

  export type user_otpScalarWhereInput = {
    AND?: user_otpScalarWhereInput | user_otpScalarWhereInput[]
    OR?: user_otpScalarWhereInput[]
    NOT?: user_otpScalarWhereInput | user_otpScalarWhereInput[]
    id?: StringFilter<"user_otp"> | string
    created_at?: DateTimeFilter<"user_otp"> | Date | string
    expires_at?: DateTimeFilter<"user_otp"> | Date | string
    otp?: StringFilter<"user_otp"> | string
    user_id?: StringFilter<"user_otp"> | string
    otp_type?: EnumUSER_OTP_TYPEFilter<"user_otp"> | $Enums.USER_OTP_TYPE
  }

  export type userCreateWithoutOtpsInput = {
    id?: string
    photo_url?: string | null
    name: string
    email: string
    password: string
    type?: $Enums.USER_TYPE
    total_millage?: number
    total_coins?: number
    available_coins?: number
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userUncheckedCreateWithoutOtpsInput = {
    id?: string
    photo_url?: string | null
    name: string
    email: string
    password: string
    type?: $Enums.USER_TYPE
    total_millage?: number
    total_coins?: number
    available_coins?: number
    email_verified?: boolean
    profile_verified?: boolean
    referral_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userCreateOrConnectWithoutOtpsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOtpsInput, userUncheckedCreateWithoutOtpsInput>
  }

  export type userUpsertWithoutOtpsInput = {
    update: XOR<userUpdateWithoutOtpsInput, userUncheckedUpdateWithoutOtpsInput>
    create: XOR<userCreateWithoutOtpsInput, userUncheckedCreateWithoutOtpsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOtpsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOtpsInput, userUncheckedUpdateWithoutOtpsInput>
  }

  export type userUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUSER_TYPEFieldUpdateOperationsInput | $Enums.USER_TYPE
    total_millage?: FloatFieldUpdateOperationsInput | number
    total_coins?: FloatFieldUpdateOperationsInput | number
    available_coins?: FloatFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_verified?: BoolFieldUpdateOperationsInput | boolean
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUSER_TYPEFieldUpdateOperationsInput | $Enums.USER_TYPE
    total_millage?: FloatFieldUpdateOperationsInput | number
    total_coins?: FloatFieldUpdateOperationsInput | number
    available_coins?: FloatFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_verified?: BoolFieldUpdateOperationsInput | boolean
    referral_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_otpCreateManyUserInput = {
    id?: string
    created_at?: Date | string
    expires_at: Date | string
    otp: string
    otp_type: $Enums.USER_OTP_TYPE
  }

  export type user_otpUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumUSER_OTP_TYPEFieldUpdateOperationsInput | $Enums.USER_OTP_TYPE
  }

  export type user_otpUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumUSER_OTP_TYPEFieldUpdateOperationsInput | $Enums.USER_OTP_TYPE
  }

  export type user_otpUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumUSER_OTP_TYPEFieldUpdateOperationsInput | $Enums.USER_OTP_TYPE
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}