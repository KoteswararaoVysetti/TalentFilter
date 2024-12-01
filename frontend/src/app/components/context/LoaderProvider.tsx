"use client";
import React, { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import Loader from "../ui/Loader/Loader";

const LoaderContext = createContext<any>(null);

export const LoaderProvider = (props: any) => {
  // const isAnythingLoading = useSelector((state) => {
  //   return (
  //     Object.values((state as any)?.api.queries).some(
  //       (entry) => (entry as any)?.status === "pending"
  //     ) &&
  //     !Object.values((state as any)?.api.queries).some(
  //       (entry) =>
  //         (entry as any)?.status === "pending" &&
  //         (entry as any)?.endpointName === "getAddressBookLastUpdatedStatus"
  //     )
  //   );
  // });
  const isAnythingLoading = false;
  return (
    <LoaderContext.Provider value={isAnythingLoading}>
      <Loader isLoading={isAnythingLoading} />
      {props?.children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
};
