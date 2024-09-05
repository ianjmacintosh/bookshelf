import {useQuery} from 'react-query'
import {client} from './api-client'
import {useMutation, queryCache} from 'react-query'

const useListItems = user => {
  const result = useQuery({
    queryKey: 'list-items',
    queryFn: () =>
      client(`list-items`, {token: user.token}).then(data => data.listItems),
  })

  return result.data ?? []
}

const useListItem = (bookId, user) => {
  const listItem = useListItems(user).find(li => li.bookId === bookId) ?? null
  return listItem
}

const useUpdateListItem = user => {
  return useMutation(
    updates =>
      client(`list-items/${updates.id}`, {
        method: 'PUT',
        data: updates,
        token: user.token,
      }),
    {onSettled: () => queryCache.invalidateQueries('list-items')},
  )
}

const useDeleteListItem = user => {
  return useMutation(
    ({id}) => client(`list-items/${id}`, {method: 'DELETE', token: user.token}),
    {onSettled: () => queryCache.invalidateQueries('list-items')},
  )
}

const useCreateListItem = user => {
  return useMutation(
    ({bookId}) => client(`list-items`, {data: {bookId}, token: user.token}),
    {onSettled: () => queryCache.invalidateQueries('list-items')},
  )
}

export {
  useListItems,
  useListItem,
  useUpdateListItem,
  useDeleteListItem,
  useCreateListItem,
}
