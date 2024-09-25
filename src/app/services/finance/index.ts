import { api } from '../api';
import { IBaseDataRes, IBaseEdit } from '../type';
import {
  ICash,
  ICashRes,
  IFacture,
  IFactureRes,
  ISource,
  ISourceRes,
} from './type';

export const financeApi = api.injectEndpoints({
  endpoints: (build) => ({
    //////// Cash ////////
    //Get cash endpoint
    getCash: build.mutation<IBaseDataRes<ICashRes>, void>({
      query: () => ({ url: '/finance/cashflow' }),
    }),

    //Add cash endpoint
    addCash: build.mutation<ICashRes, ICash>({
      query: (body) => ({
        url: '/finance/cashflow',
        method: 'POST',
        body,
      }),
    }),

    //Edit cash endpoint
    editCash: build.mutation<ICashRes, IBaseEdit<ICash>>({
      query: ({ id, body }) => ({
        url: '/finance/cashflow/' + id,
        method: 'PATCH',
        body,
      }),
    }),

    //Delete cash endpoint
    deleteCash: build.mutation<ICashRes, number>({
      query: (id) => ({
        url: '/finance/cashflow/' + id,
        method: 'DELETE',
      }),
    }),

    //////// Facture ////////
    //Get facture endpoint
    getFacture: build.mutation<IBaseDataRes<IFactureRes>, void>({
      query: () => ({ url: '/finance/facture' }),
    }),

    //Add facture endpoint
    addFacture: build.mutation<IFactureRes, IFacture>({
      query: (body) => ({
        url: '/finance/facture',
        method: 'POST',
        body,
      }),
    }),

    //Edit facture endpoint
    editFacture: build.mutation<IFactureRes, IBaseEdit<IFacture>>({
      query: ({ id, body }) => ({
        url: '/finance/facture/' + id,
        method: 'PATCH',
        body,
      }),
    }),

    //Delete facture endpoint
    deleteFacture: build.mutation<IFactureRes, number>({
      query: (id) => ({
        url: '/finance/facture/' + id,
        method: 'DELETE',
      }),
    }),

    //////// Souce ////////
    //Get source endpoint
    getSource: build.mutation<IBaseDataRes<ISourceRes>, void>({
      query: () => ({ url: '/finance/source' }),
    }),

    //Add source endpoint
    addSource: build.mutation<ISourceRes, ISource>({
      query: (body) => ({
        url: '/finance/source',
        method: 'POST',
        body,
      }),
    }),

    //Edit source endpoint
    editSource: build.mutation<ISourceRes, IBaseEdit<ISource>>({
      query: ({ id, body }) => ({
        url: '/finance/source/' + id,
        method: 'PUT',
        body,
      }),
    }),

    //Delete source endpoint
    deleteSource: build.mutation<ISourceRes, number>({
      query: (id) => ({
        url: '/finance/source/' + id,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  // Cash
  useGetCashMutation,
  useAddCashMutation,
  useEditCashMutation,
  useDeleteCashMutation,
  // Facture
  useGetFactureMutation,
  useAddFactureMutation,
  useEditFactureMutation,
  useDeleteFactureMutation,
  // Source
  useGetSourceMutation,
  useAddSourceMutation,
  useEditSourceMutation,
  useDeleteSourceMutation,
} = financeApi;
