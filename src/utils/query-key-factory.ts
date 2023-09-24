import { QueryKey } from '@tanstack/react-query';

type FunctionQueryKey<ArgsType = unknown[], ReturnType = QueryKey> = (
  ...args: ArgsType[]
) => ReturnType;

// type KeysObject = Record<string, FunctionQueryKey>;
type KeysObject = { [index: string]: FunctionQueryKey };

export const createKeyFactory = <B = string, K = KeysObject>(
  baseName: B,
  keysObject: K,
): K => {
  const newKeysObject: Record<string, FunctionQueryKey> = {};

  Object.keys(keysObject as object).forEach((key) => {
    newKeysObject[key] = (...args) => {
      let filteredKeys: unknown[] = [];

      if (keysObject[key as keyof K]) {
        const keys = (keysObject[key as keyof K] as FunctionQueryKey)(...args);

        filteredKeys = keys.filter((k) => k !== undefined && k !== null);
      }

      return [baseName, key, ...filteredKeys];
    };
  });

  return newKeysObject as K;
};
