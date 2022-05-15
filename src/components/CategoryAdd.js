
import { useState } from "react"
import PropTypes from 'prop-types'

export const CategoryAdd = ({ setCategories }) => {

  const [inputSearch, setInputSearch] = useState('')

  const handleInputSearchChange = (e) => {
    setInputSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputSearch.trim().length > 2) {
      setCategories( cats => [inputSearch, ...cats])
      setInputSearch('')
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ inputSearch }
        onChange={ handleInputSearchChange }
      />
    </form>
  )
}

CategoryAdd.propTypes = {

  setCategories: PropTypes.func.isRequired

}