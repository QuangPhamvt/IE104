import { IoIosSearch } from 'react-icons/io'
import HeaderLayout from '../store/hook'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { searchProductFormAtom } from '../store'
import { STATE } from '@/utilities'
export const SearchHeaderComponent = () => {
  const { handleSearchProduct } = HeaderLayout.useSearchProduct()
  const {
    data: { slug },
  } = useRecoilValue(searchProductFormAtom)
  const setSearchProductForm = useSetRecoilState(searchProductFormAtom)
  const handleChangeInput = (event) => {
    const value = event.target.value
    setSearchProductForm((preState) => ({
      ...preState,
      state: STATE.HAS_VALUE,
      data: { ...preState.data, slug: value },
    }))
  }
  return (
    <article className='bg-white px-4 py-2 w-3/5 flex flex-row justify-between items-center rounded-lg border-1 border-solid border-gray-400'>
      <input
        value={slug || ''}
        onChange={handleChangeInput}
        placeholder='Enter item or restaurant you are looking for'
        className='w-full'
      />
      <IoIosSearch
        size={24}
        onClick={handleSearchProduct}
        className='hover-cursor'
      />
    </article>
  )
}
