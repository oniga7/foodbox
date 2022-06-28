import { Paper } from "@mui/material";
import TableInput from "../Inputs/TableInput";
import { tableIcons, tableOptions } from "../../constants/material-table";
import MaterialTable, { MTableCell } from "@material-table/core"

export default function AdminTable(props) {
    const {columns, title, data, actions} =  props

    const MaterialTableEditField = (props) => {
        const {field} = props.columnDef;
        return (
            <TableInput
              autoFocus={true}
              name={field}
              value={props.value}
              onChange={(e)=>props.onChange(e.target.value)}
            />
        )
    }

    const MaterialTableCell = (props) => {
        const {value} = props;
        return <MTableCell {...props} value={value} />
    }

 return (
    <Paper>
        <MaterialTable
          icons={tableIcons}
          options={{
            ...tableOptions,
          }}
          title={title}
          columns={columns}
          data={data}
          components={{
            EditField: MaterialTableEditField,
            Cell: MaterialTableCell
          }}
          editable={actions}
        />
    </Paper>
 )
}