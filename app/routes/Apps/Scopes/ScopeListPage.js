import React, { useState } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
//import { scopes } from "../Scopes/scopes";
import GluuDialog from "../Gluu/GluuDialog";
import ClientDetailPage from "../Scopes/ScopeDetailPage";
import { getScopes, deleteScope } from "../../../redux/actions/ScopeActions";

function ScopeListPage({ scopes, loading }) {
  //const scopes = useSelector(state => state.scopeReducer.scopes);
  //const loading = useSelector(state => state.scopeReducer.loading);
  console.log("===========================1 " + scopes);
  console.log("===========================2 " + loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const [item, setItem] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function handleGoToScopeAddPage() {
    return history.push("/scope/new");
  }
  function handleGoToScopeEditPage(row) {
    return history.push(`/scope/edit:` + row.inum);
  }
  function handleScopeDelete(row) {
    setItem(row);
    toggle();
  }
  function onDeletionConfirmed() {
    dispatch(deleteScope(item));
    toggle();
  }
  return (
    <React.Fragment>
      {/* START Content */}
      <MaterialTable
        columns={[
          { title: "Inum", field: "inum" },
          { title: "ID", field: "id" },
          { title: "Type", field: "scopeType" }
        ]}
        data={scopes}
        isLoading={false}
        title="OpenId Connect scopes && Uma scopes"
        actions={[
          rowData => ({
            icon: "edit",
            iconProps: {
              color: "primary",
              id: "editScope" + rowData.inum
            },
            tooltip: "Edit Scope",
            onClick: (event, rowData) => handleGoToScopeEditPage(rowData),
            disabled: false
          }),
          {
            icon: "add",
            tooltip: "Add Scope",
            iconProps: { color: "primary" },
            isFreeAction: true,
            onClick: () => handleGoToScopeAddPage()
          },
          rowData => ({
            icon: "delete",
            iconProps: {
              color: "secondary",
              id: "deleteScope" + rowData.inum
            },
            tooltip: rowData.deletable
              ? "Delete Scope"
              : "This Scope can't be detele",
            onClick: (event, rowData) => handleScopeDelete(rowData),
            disabled: rowData.defaultScope
          })
        ]}
        options={{
          search: true,
          selection: false,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
            padding: "2px",
            textTransform: "uppercase",
            fontSize: "18px"
          },
          actionsColumnIndex: -1
        }}
        detailPanel={rowData => {
          return <ClientDetailPage row={rowData} />;
        }}
      />
      {/* END Content */}
      <GluuDialog
        row={item}
        handler={toggle}
        modal={modal}
        subject="openid connect client"
        onAccept={onDeletionConfirmed}
      />
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  scopes: state.scopeReducer.scopes,
  loading: state.scopeReducer.loading
});

const mapDispatchToProps = dispatch => ({
  getScopes: () => dispatch(getScopes)
});
export default connect(mapStateToProps, mapDispatchToProps)(ScopeListPage);
