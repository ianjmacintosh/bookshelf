import {useQuery} from 'react-query'
import {client} from './api-client'

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

export {useListItems, useListItem}
