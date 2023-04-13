import React from 'react'

type Props = {

}

const SearchBar = (props: Props) => {
  return (
    <form>
        <input type="text" placeholder="search..." />
        <label>
            <input type="checkbox" name="" id="" />
            {' '}
            Show in stock products only
        </label>
    </form>
  )
}