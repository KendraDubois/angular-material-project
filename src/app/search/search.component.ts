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
                console.log(objNode.text);
                //console.log(objNode.node.id);
                var objName = objNode.text;
                console.log(objName);

                // Get modal element
                var modal = document.getElementById('simpleModal');
                // Get open modal button
                var modalBtn = document.getElementById('modalBtn');
                // Get close button
                var closeBtn = document.getElementsByClassName('closeBtn')[0];

                // Listen for open click
                //modalBtn.addEventListener('click', openModal);
                // Listen for close click
                closeBtn.addEventListener('click', closeModal);
                // Listen for click outside of modal
                window.addEventListener('click', outsideClick);

                //Open model and block background
                modal.style.display = 'block';

                // Function to close modal
                function closeModal() {
                    modal.style.display = 'none';
                }

                // Function to close modal if outside click
                //Pass in event (click information)
                function outsideClick(e) {
                    if (e.target == modal) {
                        //if the event, was outside the modal...
                        //close the modal/do not display the modal
                        modal.style.display = 'none';
                    }
                }

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

// Wait for DOM to be ready
$(document).ready(function () {
    // // Get modal element
    // var modal = document.getElementById('simpleModal');
    // // Get open modal button
    // var modalBtn = document.getElementById('modalBtn');
    // // Get close button
    // var closeBtn = document.getElementsByClassName('closeBtn')[0];

    // // Listen for open click
    // modalBtn.addEventListener('click', openModal);
    // // Listen for close click
    // closeBtn.addEventListener('click', closeModal);
    // // Listen for click outside of modal
    // window.addEventListener('click', outsideClick);

    // // Function to open modal
    // function openModal() {
    //     //Open model and block background
    //     modal.style.display = 'block';
    // }

    // // Function to close modal
    // function closeModal() {
    //     modal.style.display = 'none';
    // }

    // // Function to close modal if outside click
    // //Pass in event (click information)
    // function outsideClick(e) {
    //     if (e.target == modal) {
    //         //if the event, was outside the modal...
    //          //close the modal/do not display the modal
    //         modal.style.display = 'none';
    //     }
    // }
});


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