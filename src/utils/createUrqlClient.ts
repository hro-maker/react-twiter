import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange, createClient } from "urql";
import { LoginMutation, MeQuery, MeDocument, RegisterMutation } from "../generated/graphql";
import { betterpdateQuery } from "./betterpdateQuery";

export const createUrqlClient = (ssrExchange: any) => ({
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
        credentials: 'include' as const
    },
    exchanges: [dedupExchange, cacheExchange({

        updates: {
            Mutation: {
                logout: (_result, args, cache, info) => {
                    betterpdateQuery<LoginMutation, MeQuery>(cache,
                        { query: MeDocument },
                        _result,
                        (result, query) => ({ me: null })

                    )
                },

                login: (_result, args, cache, info) => {

                    betterpdateQuery<LoginMutation, MeQuery>(cache,
                        { query: MeDocument },
                        _result,
                        (result, query) => {
                            if (result.login.errors) {
                                return query
                            } else {
                                return {
                                    me: result.login.user
                                }
                            }
                        }
                    )
                },
                register: (_result, args, cache, info) => {
                    betterpdateQuery<RegisterMutation, MeQuery>(cache,
                        { query: MeDocument },
                        _result,
                        (result, query) => {
                            if (result.register.errors) {
                                return query
                            } else {
                                return {
                                    me: result.register.user
                                }
                            }
                        }
                    )
                }

            },

        }
    }),
    ssrExchange,
    fetchExchange

    ]
    
} );