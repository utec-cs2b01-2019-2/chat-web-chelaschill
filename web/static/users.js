$(function(){
    var url = "http://127.0.0.1:8000/users";
    $("#grid").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url,
            insertUrl: url,
            updateUrl: url,
            deleteUrl: url,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),

        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },

        remoteOperations: {
            sorting: true,
            paging: true
        },

        paging: {
            pageSize: 12
        },

        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20]
        },

        columns: [{
            dataField: "id",
            dataType: "number",
            allowEditing: true
        }, {
            dataField: "content"
        }, {
            dataField: "sent_on"
            allowEditing: false
        }, {
            dataField: "from_user_id"
        }, {
            dataField: "to_user_id"
        }, {
            dataField: "from_user_name"
        }, {
            dataField: "to_user_name"
        }, ],
    }).dxDataGrid("instance");
});
