import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Hover, Level, State } from "../../pages/types";

const initialState: State = {
  data: [],
  level: { name: "", field: 0 },
  hover: [],
};

export const setLevels = createAsyncThunk<Level[], Level[]>(
  "level/setLevels",
  async (data: Level[]) => {
    return data;
  }
);

export const changeLevel = createAsyncThunk<Level, Level>(
  "level/changeLevel",
  async (level: Level) => {
    return level;
  }
);

export const setHover = createAsyncThunk<Hover[], number>(
  "level/setHover",
  async (count) => {
    const hover: Hover[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        hover.push({ row: i, col: j, hover: false });
      }
    }
    return hover;
  }
);

export const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    updateHover: (state, { payload }) => {
      const { row, col } = payload;
      const newState = { ...state };
      const hover: Hover[] = [...state.hover];

      const newHover = hover.map((item) =>
        item.row === row && item.col === col
          ? { ...item, hover: !item.hover }
          : item
      );
      newState.hover = newHover;
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLevels.fulfilled, (state: State, { payload }) => {
      return { ...state, data: payload };
    });
    builder.addCase(setLevels.rejected, (state: State, { error }) => {
      console.log(error);
    });
    builder.addCase(changeLevel.fulfilled, (state: State, { payload }) => {
      return { ...state, level: payload };
    });
    builder.addCase(changeLevel.rejected, (state: State, { error }) => {
      console.log(error);
    });
    builder.addCase(setHover.fulfilled, (state: State, { payload }) => {
      return { ...state, hover: payload };
    });
    builder.addCase(setHover.rejected, (state: State, { error }) => {
      console.log(error);
    });
  },
});

export const { updateHover } = levelSlice.actions;
export default levelSlice.reducer;
