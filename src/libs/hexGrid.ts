type Point = [x: number, y: number]
interface Hexagon {
  center: Point
  corners: [Point, Point, Point, Point, Point, Point]
}

const computeGrid = (columns: number, rows: number, size = 1) => {
  const grid: Hexagon[] = []
  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= columns; c++) {
      const offset = c % 2 === 0 ? 0 : (Math.sqrt(3) * size) / 2
      const x = (3 / 2) * size * c + size / 2
      const y = Math.sqrt(3) * size * r + offset + size / 2
      grid.push({
        center: [x, y],
        corners: [
          [x + size, y],
          [x + size / 2, y + (size * Math.sqrt(3)) / 2],
          [x - size / 2, y + (size * Math.sqrt(3)) / 2],
          [x - size, y],
          [x - size / 2, y - (size * Math.sqrt(3)) / 2],
          [x + size / 2, y - (size * Math.sqrt(3)) / 2]
        ]
      })
    }
  }
  return grid
}

export const getHexGrid = (width: number, height: number, size = 1) => {
  const columns = Math.floor(width / ((3 / 2) * size))
  const rows = Math.floor(height / (Math.sqrt(3) * size))
  return computeGrid(columns, rows, size)
}
