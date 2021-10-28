var chart_window;

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}


function loadChartPackage() {
    chart_window = document.getElementById('chart');
    
    if (!chart_window) {
        let canvas = document.getElementById('game');
    
        chart_window = document.createElement('div');
        chart_window.id = 'chart';
        chart_window.style.width = '400px';
        chart_window.style.height = '480px';
        chart_window.style.border = '2px solid black';
        chart_window.style.margin = '0 10px 10px 12px';
        chart_window.style.display = 'inline-block';
        chart_window.style.verticalAlign = 'baseline';
    
        chart_window = document.getElementById('output').replaceChild(chart_window, canvas);
    }
    
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
}

loadScript("https://www.gstatic.com/charts/loader.js", loadChartPackage);

function drawChart() {

  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Element');
  data.addColumn('number', 'Percentage');
  data.addRows([
    ['Nitrogen', 0.78],
    ['Oxygen', 0.21],
    ['Other', 0.01]
  ]);

  // Instantiate and draw the chart.
  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, null);
}
