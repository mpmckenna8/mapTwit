// just use this to make table http://jsfiddle.net/7WQjr/

var tweTab = d3.select('body').append('div').attr('id', 'container');


var mapCle = d3.json('maptimes.json', function(err,data){
  if(err){console.log(err)}
  else{
     console.log(data)

function tabulate(data, columns) {
    var table = d3.select("#container").append("table"),
        thead = table.append("thead"),
        tbody = table.append("tbody");

    // append the header row
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
            .text(function(column,i) {
          //    console.log(column)
              return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr")
        .attr('class',function(d,i){
        //  console.log(d);
          var bicol = (i%2);
          if(bicol ===0){
            return 'eve cell'
          }
          else{
            return 'odd cell'
          }
        })
;

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function(row,i) {
        //  console.log(i);
            return columns.map(function(column) {
                return {column: column, value: row[column]};
            });
        })
        .enter()
        .append("td")
            .html(function(d,i) {
              //console.log(i);
//console.log(typeof(d.value))
              if(typeof(d.value)==='object'){
                return '<p>' + d.value.name +'</p><p>@' +d.value.screen_name +'</p>'
              }
              else{return d.value}
              ; })

            cells.attr('class','god');

            d3.selectAll('rows')
            .attr('class', function(d,i){
              console.log(i);
              return 'rower'
            })

              ;

    return table;
}

// create some people

// render the table
var peopleTable = tabulate(data, ["user", "text"]);

// uppercase the column headers
peopleTable.selectAll("thead th")
    .text(function(column) {
        return column.charAt(0).toUpperCase() + column.substr(1);
    });

// sort by age


//peopleTable.selectAll('tr').attr('class','rower')
    for (var o in data){
    //  tweTab.append('tr').append('td').
    // console.log(data[o].user.name)
    };
  }
})
