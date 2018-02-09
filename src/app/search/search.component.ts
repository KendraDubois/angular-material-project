import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(function () {
            var jsondata = [
                { "id": "ajson1", "parent": "#", "text": "Simple root node" },
                { "id": "ajson2", "parent": "#", "text": "Root node 2" },
                { "id": "ajson3", "parent": "ajson2", "text": "Child 1" },
                { "id": "ajson4", "parent": "ajson2", "text": "Child 2" },
            ];

            createJSTree(jsondata);
        });

        function createJSTree(jsondata) {
            $('#SimpleJSTree').jstree({
                "core": {
                    'data': jsondata
                },
                "plugins": ["search"],
                "search": {
                    "case_sensitive": false,
                    "show_only_matches": true
                }
            });
        }

        $('#SimpleJSTree')
            .on('changed.jstree', function (e, data) {
                var objNode = data.instance.get_node(data.selected);
                console.log(objNode);
                $('#jstree-result').html('Selected: <br/><strong>' + objNode.id + '-' + objNode.text + '</strong>');

            });
        $(document).ready(function () {
            $(".search-input").keyup(function () {
                var searchString = $(this).val();
                $('#SimpleJSTree').jstree('search', searchString);
            });
        });
    }
}

// function myFunction()
// {
// $(document).ready(function(){

// // var value=document.getElementById("search_field").value; 
// var value= (<HTMLInputElement>document.getElementById("search_field")).value;


//     $("#search_tree").click(function () { 

//         $("#foo").jstree("search",value) 
//  }); 

//  }); 
// }