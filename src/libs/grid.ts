export type GridPoint = [x: number, y: number]
export type GridHexagonCorners = [GridPoint, GridPoint, GridPoint, GridPoint, GridPoint, GridPoint]

const computeGridPositions = (columns: number, rows: number, size: number): GridPoint[] => {
  const grid: GridPoint[] = []
  for (let c = 0; c < columns; c++) {
    const offset = c % 2 === 0 ? 0 : (Math.sqrt(3) * size) / 2
    const x = (3 / 2) * size * c + size / 2
    for (let r = 0; r < rows; r++) {
      const y = Math.sqrt(3) * size * r + offset + size / 2
      grid.push([x, y])
    }
  }
  return grid
}

export const getGridPositions = (width: number, height: number, size: number): GridPoint[] => {
  const columns = Math.ceil(width / ((3 / 2) * size))
  const rows = Math.ceil(height / (Math.sqrt(3) * size))
  return computeGridPositions(columns, rows, size)
}

export const getHexagonCorners = (size: number, [x, y]: GridPoint = [0, 0]): GridHexagonCorners => {
  return [
    [x + size, y],
    [x + size / 2, y + (size * Math.sqrt(3)) / 2],
    [x - size / 2, y + (size * Math.sqrt(3)) / 2],
    [x - size, y],
    [x - size / 2, y - (size * Math.sqrt(3)) / 2],
    [x + size / 2, y - (size * Math.sqrt(3)) / 2]
  ]
}
