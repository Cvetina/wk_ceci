 $(document).ready(function() {
    // get items to poplute from db_items.json
    $.getJSON("db_items.json", function(json) {
      var items = json.items;
      var tabpannel_container = document.getElementById("24HoursEvents");

      // iterates all items in array and generates HTML code for each one, from template
      for (var i = 0; i < items.length; i++) {

        // template which we use for generation of each element
        var row_string = '<div class="col-md-12 tabs-first">{{title}}' +
          ' <button type="button" class="btn btn-info" data-toggle="collapse" data-target="{{target}}"><i class="fa fa-chevron-down" aria-hidden="true"></i></button>' +
          '<div id="{{demo}}" class="collapse">' +
          '<div class="col-md-6 col-sm-6 col-xs-6"><strong>{{legue}}</strong></div>' +
          '<div class="col-md-6 col-sm-6 col-xs-6"><span>Market</span><span>1</span><span>2</span><span><i class="fa fa-star"></i></span></div>' +
          '<div class="col-md-6 col-sm-6 col-xs-6">{{match}}</div>' +
          '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{winner}}</span><span>{{one}}</span><span>{{two}}</span><span>{{score}}</span></div>' +
          '</div>' +
          '</div>';

        // replace each var in template, which is in {{}}
        row_string = row_string.replace("{{title}}", items[i].title);
        row_string = row_string.replace("{{target}}", items[i].target);
        row_string = row_string.replace("{{demo}}", items[i].demo);
        row_string = row_string.replace("{{legue}}", items[i].legue);
        row_string = row_string.replace("{{match}}", items[i].match);
        row_string = row_string.replace("{{winner}}", items[i].winner);
        row_string = row_string.replace("{{one}}", items[i].one);
        row_string = row_string.replace("{{two}}", items[i].two);
        row_string = row_string.replace("{{score}}", items[i].score);

        // create div class 'row', and fill it with generated string row_string
        var div_current = document.createElement("div");
        div_current.className = "row";
        tabpannel_container.appendChild(div_current);
        div_current.innerHTML = row_string;
      }
    })
    
     
    .fail(function() {
      var tabpannel_container = document.getElementById("24HoursEvents");
      var h2 = document.createElement("h2");
      h2.innerHTML = 'Моля, отворете страницата през webserver, за да видите залозите!<br>Те се зареждат от JSON файл, който не може да се отвори през <b>file://</b> link!';
      h2.style.backgroundColor = "red";
      h2.style.color = "white";
      tabpannel_container.appendChild(h2);
    });
    // get items to poplute from db_items2.json
    $.getJSON("db_items2.json", function(json2) {
      var items = json2.items;
      var tabpannel_container = document.getElementById("allEvents");

      // iterates all items in array and generates HTML code for each one, from template
      for (var i = 0; i < items.length; i++) {

        // template which we use for generation of each element
        var row_string = '<div class="col-md-12 tabs-first">{{title}}' +
          ' <button type="button" class="btn btn-info" data-toggle="collapse" data-target="{{target}}"><i class="fa fa-chevron-down" aria-hidden="true"></i></button>' +
          '<div id="{{demo}}" class="collapse">' +
          '<div class="col-md-6 col-sm-6 col-xs-6"><strong>{{legue}}</strong></div>' +
          '<div class="col-md-6 col-sm-6 col-xs-6"><span>Market</span><span>1</span><span>2</span><span><i class="fa fa-star"></i></span></div>' +
          '<div class="col-md-6 col-sm-6 col-xs-6">{{match}}</div>' +
          '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{winner}}</span><span>{{one}}</span><span>{{two}}</span><span>{{score}}</span></div>' +
          '</div>' +
          '</div>';

        // replace each var in template, which is in {{}}
        row_string = row_string.replace("{{title}}", items[i].title);
        row_string = row_string.replace("{{target}}", items[i].target);
        row_string = row_string.replace("{{demo}}", items[i].demo);
        row_string = row_string.replace("{{legue}}", items[i].legue);
        row_string = row_string.replace("{{match}}", items[i].match);
        row_string = row_string.replace("{{winner}}", items[i].winner);
        row_string = row_string.replace("{{one}}", items[i].one);
        row_string = row_string.replace("{{two}}", items[i].two);
        row_string = row_string.replace("{{score}}", items[i].score);

        // create div class 'row', and fill it with generated string row_string
        var div_current = document.createElement("div");
        div_current.className = "row";
        tabpannel_container.appendChild(div_current);
        div_current.innerHTML = row_string;
      }
    })
    
     
    .fail(function() {
      var tabpannel_container = document.getElementById("allEvents");
      var h2 = document.createElement("h2");
      h2.innerHTML = 'Моля, отворете страницата през webserver, за да видите залозите!<br>Те се зареждат от JSON файл, който не може да се отвори през <b>file://</b> link!';
      h2.style.backgroundColor = "red";
      h2.style.color = "white";
      tabpannel_container.appendChild(h2);
    });
     // get items to poplute from db_items_dota.json
    $.getJSON("db_items_dota.json", function(jsonDota) {
      var items = jsonDota.items;
      var tabpannel_container = document.getElementById("dota");

      // iterates all items in array and generates HTML code for each one, from template
      for (var i = 0; i < items.length; i++) {

        // template which we use for generation of each element
        var row_string = '<div class="col-md-6 col-sm-6 col-xs-6"><strong>{{title}}</strong></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>Market</span><span>1</span><span>2</span><span><i class="fa fa-star"></i></span></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">{{legue}}</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{match}}</span><span>{{one}}</span><span>{{two}}</span><span>{{score}}</span></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">{{legue2}}</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{match2}}</span><span>{{one2}}</span><span>{{two2}}</span><span>{{score2}}</span></div>';

        // replace each var in template, which is in {{}}
        row_string = row_string.replace("{{title}}", items[i].title);
        row_string = row_string.replace("{{legue}}", items[i].legue);
        row_string = row_string.replace("{{match}}", items[i].match);
        row_string = row_string.replace("{{one}}", items[i].one);
        row_string = row_string.replace("{{two}}", items[i].two);
        row_string = row_string.replace("{{score}}", items[i].score);
        row_string = row_string.replace("{{legue2}}", items[i].legue2);
        row_string = row_string.replace("{{match2}}", items[i].match2);
        row_string = row_string.replace("{{one2}}", items[i].one2);
        row_string = row_string.replace("{{two2}}", items[i].two2);
        row_string = row_string.replace("{{score2}}", items[i].score2);

        // create div class 'row', and fill it with generated string row_string
        var div_current = document.createElement("div");
        div_current.className = "row";
        tabpannel_container.appendChild(div_current);
        div_current.innerHTML = row_string;
      }
    })
    
     
    .fail(function() {
      var tabpannel_container = document.getElementById("dota");
      var h2 = document.createElement("h2");
      h2.innerHTML = 'Моля, отворете страницата през webserver, за да видите залозите!<br>Те се зареждат от JSON файл, който не може да се отвори през <b>file://</b> link!';
      h2.style.backgroundColor = "red";
      h2.style.color = "white";
      tabpannel_container.appendChild(h2);
    });
    $.getJSON("db_items_counter_strike.json", function(jsonCounterStrike) {
      var items = jsonCounterStrike.items;
      var tabpannel_container = document.getElementById("counter-strike");

      // iterates all items in array and generates HTML code for each one, from template
      for (var i = 0; i < items.length; i++) {

        // template which we use for generation of each element
        var row_string = '<div class="col-md-6 col-sm-6 col-xs-6"><strong>{{title}}</strong></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>Market</span><span>1</span><span>2</span><span><i class="fa fa-star"></i></span></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">{{legue}}</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{match}}</span><span>{{one}}</span><span>{{two}}</span><span>{{score}}</span></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">{{legue2}}</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{match2}}</span><span>{{one2}}</span><span>{{two2}}</span><span>{{score2}}</span></div>';

        // replace each var in template, which is in {{}}
        row_string = row_string.replace("{{title}}", items[i].title);
        row_string = row_string.replace("{{legue}}", items[i].legue);
        row_string = row_string.replace("{{match}}", items[i].match);
        row_string = row_string.replace("{{one}}", items[i].one);
        row_string = row_string.replace("{{two}}", items[i].two);
        row_string = row_string.replace("{{score}}", items[i].score);
        row_string = row_string.replace("{{legue2}}", items[i].legue2);
        row_string = row_string.replace("{{match2}}", items[i].match2);
        row_string = row_string.replace("{{one2}}", items[i].one2);
        row_string = row_string.replace("{{two2}}", items[i].two2);
        row_string = row_string.replace("{{score2}}", items[i].score2);

        // create div class 'row', and fill it with generated string row_string
        var div_current = document.createElement("div");
        div_current.className = "row";
        tabpannel_container.appendChild(div_current);
        div_current.innerHTML = row_string;
      }
    })
    
     
    .fail(function() {
      var tabpannel_container = document.getElementById("counter-strike");
      var h2 = document.createElement("h2");
      h2.innerHTML = 'Моля, отворете страницата през webserver, за да видите залозите!<br>Те се зареждат от JSON файл, който не може да се отвори през <b>file://</b> link!';
      h2.style.backgroundColor = "red";
      h2.style.color = "white";
      tabpannel_container.appendChild(h2);
    });
    $.getJSON("db_items_hon.json", function(jsonHon) {
      var items = jsonHon.items;
      var tabpannel_container = document.getElementById("hon");

      // iterates all items in array and generates HTML code for each one, from template
      for (var i = 0; i < items.length; i++) {

        // template which we use for generation of each element
        var row_string = '<div class="col-md-6 col-sm-6 col-xs-6"><strong>{{title}}</strong></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>Market</span><span>1</span><span>2</span><span><i class="fa fa-star"></i></span></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">{{legue}}</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{match}}</span><span>{{one}}</span><span>{{two}}</span><span>{{score}}</span></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">{{legue2}}</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{match2}}</span><span>{{one2}}</span><span>{{two2}}</span><span>{{score2}}</span></div>';

        // replace each var in template, which is in {{}}
        row_string = row_string.replace("{{title}}", items[i].title);
        row_string = row_string.replace("{{legue}}", items[i].legue);
        row_string = row_string.replace("{{match}}", items[i].match);
        row_string = row_string.replace("{{one}}", items[i].one);
        row_string = row_string.replace("{{two}}", items[i].two);
        row_string = row_string.replace("{{score}}", items[i].score);
        row_string = row_string.replace("{{legue2}}", items[i].legue2);
        row_string = row_string.replace("{{match2}}", items[i].match2);
        row_string = row_string.replace("{{one2}}", items[i].one2);
        row_string = row_string.replace("{{two2}}", items[i].two2);
        row_string = row_string.replace("{{score2}}", items[i].score2);

        // create div class 'row', and fill it with generated string row_string
        var div_current = document.createElement("div");
        div_current.className = "row";
        tabpannel_container.appendChild(div_current);
        div_current.innerHTML = row_string;
      }
    })
    
     
    .fail(function() {
      var tabpannel_container = document.getElementById("hon");
      var h2 = document.createElement("h2");
      h2.innerHTML = 'Моля, отворете страницата през webserver, за да видите залозите!<br>Те се зареждат от JSON файл, който не може да се отвори през <b>file://</b> link!';
      h2.style.backgroundColor = "red";
      h2.style.color = "white";
      tabpannel_container.appendChild(h2);
    });
     $.getJSON("db_items_sc.json", function(jsonSC) {
      var items = jsonSC.items;
      var tabpannel_container = document.getElementById("star-craft");

      // iterates all items in array and generates HTML code for each one, from template
      for (var i = 0; i < items.length; i++) {

        // template which we use for generation of each element
        var row_string = '<div class="col-md-6 col-sm-6 col-xs-6"><strong>{{title}}</strong></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>Market</span><span>1</span><span>2</span><span><i class="fa fa-star"></i></span></div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">{{legue}}</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6"><span>{{match}}</span><span>{{one}}</span><span>{{two}}</span><span>{{score}}</span></div>';

        // replace each var in template, which is in {{}}
        row_string = row_string.replace("{{title}}", items[i].title);
        row_string = row_string.replace("{{legue}}", items[i].legue);
        row_string = row_string.replace("{{match}}", items[i].match);
        row_string = row_string.replace("{{one}}", items[i].one);
        row_string = row_string.replace("{{two}}", items[i].two);
        row_string = row_string.replace("{{score}}", items[i].score);

        // create div class 'row', and fill it with generated string row_string
        var div_current = document.createElement("div");
        div_current.className = "row";
        tabpannel_container.appendChild(div_current);
        div_current.innerHTML = row_string;
      }
    })
    
     
    .fail(function() {
      var tabpannel_container = document.getElementById("star-craft");
      var h2 = document.createElement("h2");
      h2.innerHTML = 'Моля, отворете страницата през webserver, за да видите залозите!<br>Те се зареждат от JSON файл, който не може да се отвори през <b>file://</b> link!';
      h2.style.backgroundColor = "red";
      h2.style.color = "white";
      tabpannel_container.appendChild(h2);
    });
  });
  

  document.addEventListener("touchstart", function() {}, true);
  $(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });