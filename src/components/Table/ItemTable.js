import * as React from 'react'
import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
// import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils'
import { useEffect } from 'react'
import { useState } from 'react'

// function createData(productName, width, depth, height, weight, count) {
//   return { productName, width, depth, height, weight, count }
// }

//const rows = [
// createData('sss01', 'SONATA', 1860, 4910, 1445, '1.5t'),
// createData('sss02', 'SONATA', 1860, 4910, 1445, '1.5t'),
// createData('sss03', 'SONATA', 1860, 4910, 1445, '1.5t'),
// createData('mmm01', 'PALISADE', 1975, 4995, 1750, '1.8t'),
// createData('mmm02', 'PALISADE', 1975, 4995, 1750, '1.8t'),
// createData('mmm03', 'PALISADE', 1975, 4995, 1750, '1.8t'),
// createData('lll04', 'PALISADE', 1975, 4995, 1750, '1.8t'),
// createData('lll01', 'STARIA Lounge', 1995, 5255, 1990, '2t'),
// createData('lll02', 'STARIA Lounge', 1995, 5255, 1990, '2t'),
// createData('lll03', 'STARIA Lounge', 1995, 5255, 1990, '2t'),
// createData('lll04', 'STARIA Lounge', 1995, 5255, 1990, '2t'),
//]

// sorting
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

// table header
const headCells = [
  // {
  //   id: 'id',
  //   numeric: false,
  //   label: 'Product ID',
  // },
  {
    id: 'name',
    numeric: false,
    label: 'Product Name',
  },
  {
    id: 'rows',
    numeric: true,
    label: '가로(mm)',
  },
  {
    id: 'columns',
    numeric: true,
    label: '세로(mm)',
  },
  {
    id: 'height',
    numeric: true,
    label: '높이(mm)',
  },
  {
    id: 'weight',
    numeric: true,
    label: '무게(kg)',
  },
  {
    id: 'count',
    numeric: true,
    label: '갯수',
  },
  {
    id: 'delete',
    numeric: false,
    label: '삭제',
  },
]

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    onDelete,
  } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.id === 'id' ? 'left' : 'right'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: theme =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//       <Typography
//         sx={{ flex: '1 1 100%' }}
//         variant="h6"
//         id="tableTitle"
//         component="div"
//       >
//         물류 정보 관리
//       </Typography>
//     </Toolbar>
//   )
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// }

export default function EnhancedTable(props) {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('rows')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [tableData, setTableData] = useState(props.rows)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = tableData.map(n => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleDelete = id => {
    console.log('삭제')
    // const updatedData = tableData.filter((row) => row.id !== id);
    // setTableData(updatedData);
  }

  const onDelete = targetId => {
    console.log(`${targetId}가 삭제되었습니다`)
    const newItemList = tableData.filter(it => it.id !== targetId)
    console.log(newItemList)
    setTableData(newItemList)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = id => selected.indexOf(id) !== -1

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0

  const visibleRows = React.useMemo(
    () =>
      stableSort(tableData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  )

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={tableData.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                //const isItemSelected = isSelected(row.id)
                //sconsole.log(row)
                console.log('visibleRows:', visibleRows)
                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, row.id)}
                    // aria-checked={isItemSelected}
                    // tabIndex={-1}
                    // key={row.id}
                    // selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    {/* <TableCell component="th" scope="row" text-align="left">
                      {row.id}
                    </TableCell> */}
                    <TableCell align="right">{row.productname}</TableCell>
                    <TableCell align="right">{row.width}</TableCell>
                    <TableCell align="right">{row.height}</TableCell>
                    <TableCell align="right">{row.depth}</TableCell>
                    <TableCell align="right">{row.weight}</TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                    <TableCell align="right">
                      {/* <IconButton aria-label="delete" size="large"
                        onClick={() => handleDelete(row.id)} 
                      >
                        <DeleteIcon />
                      </IconButton> */}
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => {
                          if (
                            window.confirm(
                              `${row.id}번째 일기를 정말 삭제하시겠습니까?`
                            )
                          ) {
                            onDelete(row.id) // 현재 id
                          }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}
