import {useQuery} from 'react-query'
import {client} from './api-client'

const useListItems = user => {
  const result = useQuery({
    queryKey: 'list-items',
    queryFn: () =>
      client(`list-items`, {token: user.token}).then(data => data.listItems),
  })

  return result.data ?? null
}

export {useListItems}
