/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/convData` | `/convLengthComponent` | `/convSquare` | `/convTemp` | `/convWeight` | `/converters`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
