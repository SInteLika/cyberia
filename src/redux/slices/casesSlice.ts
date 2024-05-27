import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import instance from "../../utils/axiox/instance";

export const fetchCategories = createAsyncThunk<Categories[], undefined, { rejectValue: string }>('cases/fetchCategories',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await instance.get('project-categories')
            return data.items

        } catch (err) {
            return rejectWithValue('Ошибка во время загрузка категорий')
        }

    }
)

export const fetchCards = createAsyncThunk<Items[], undefined, { rejectValue: string }>('cases/fetchCards',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await instance.get('/projects')
            return data.items

        } catch (err) {
            return rejectWithValue('Ошибка во время загрузка проектов')
        }

    }
)


interface Categories {
    id: number
    name: string
}

interface Items {
    id: number
    title: string
    slug: string
    project_url: string | null
    image: string
    image_dark: string
    description: string
    geo: {
        lat: string | null
        lng: string | null
    }
    categories: Categories[]

}

interface CasesState {
    items: Items[] | null
    itemsStatus: 'ok' | 'loading' | 'err' | null
    categories: Categories[] | null
    categoriesStatus: 'ok' | 'loading' | 'err' | null
    selectFilter: number
}

const initialState: CasesState = {
    items: null,
    itemsStatus: null,
    categories: null,
    categoriesStatus: null,
    selectFilter: 0
}


export const casesSlice = createSlice({
    name: 'cases',
    initialState,
    reducers: {
        changeCategories: (state, action: PayloadAction<number>) => {
            state.selectFilter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Categories[]>) => {
                state.categories = action.payload
                state.categoriesStatus = 'ok'

            })
            .addCase(fetchCategories.pending, (state) => {
                state.categoriesStatus = 'loading'
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.categoriesStatus = 'err'
            })
            .addCase(fetchCards.fulfilled, (state, action: PayloadAction<Items[]>) => {
                state.items = action.payload
                state.itemsStatus = 'ok'

            })
            .addCase(fetchCards.pending, (state) => {
                state.itemsStatus = 'loading'
            })
            .addCase(fetchCards.rejected, (state) => {
                state.itemsStatus = 'err'
            })
    }
})

export const {changeCategories} = casesSlice.actions


export default casesSlice.reducer


