import { createContext, useContext, useState } from "react";

interface MarvelREsponseContextData {
  publicKey: string;
  privateKey: string;
}

const MarvelResponseContext = createContext({} as MarvelREsponseContextData);

export default function MarvelResponseProvider({ children }) {
  const publicKey = 'Put your public key for marvels api here';
  const privateKey = 'Put your private key for marvels api here'

  return (
    <MarvelResponseContext.Provider value={{
        publicKey,
        privateKey,
      }}
    >
      {children}
    </MarvelResponseContext.Provider>
  )
}

export function useMarvel() {
  const context = useContext(MarvelResponseContext);
  const { publicKey, privateKey } = context;
  return { publicKey, privateKey };
}