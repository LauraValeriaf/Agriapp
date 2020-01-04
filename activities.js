/*
<th>Date</th>
                <th>Type</th>
                <th>Place</th>
                <th>Product</th>
                <th>State</th>
            </tr>


*/



const app = {
    buildForm() {
      return [
        $('#Date').val(),
        $('#Type').val(),
        $('#Product').val(),
        $('#State<').val(),
        $('#startDate')
          .val()
          .replace(new RegExp('-', 'g'), '/'),
    
      ];
    },



    addRow(dataTable, data) {
        const addedRow = dataTable.row.add(data).draw();
        addedRow.show().draw(false);
    
        const addedRowNode = addedRow.node();
        console.log(addedRowNode);
        $(addedRowNode).addClass('highlight');
      },
      selectRow(dataTable) {
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
        } else {
          dataTable.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
        }
      },
      removeRow(dataTable) {
        dataTable.row('.selected').remove().draw( false );
      },
      start() {
        const dataTable = $('#realtime').DataTable({
          data: dataSet,
          columns: [
            { title: 'Date' },
            { title: 'Type' },
            { title: 'Place' },
            { title: 'Product' },
            { title: 'State' },
            { title: 'Note' }
          ]
        });
    
        $('#add').on('click', this.sendToServer.bind(this));
        const self = this;
        $('#realtime tbody').on('click', 'tr', function(){
          self.selectRow.bind(this, dataTable)();
        });
        $('#remove').on('click', this.removeRow.bind(this, dataTable));
    
        // Pusher
        var pusher = new Pusher('App Key', {
          cluster: 'CLUSTER',
          encrypted: true
        });
    
        var channel = pusher.subscribe('records');
        channel.bind('new-record', (data) => {
          this.addRow(dataTable, data);
        });
      }
    };
    
    $(document).ready(() => app.start());