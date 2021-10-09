menu_list_array = ["Veg Margherita Pizza", "vag paneer tikka pizza" , "chicken 'n' baccon pizza" , "cinnamon roll dessert pizza",
 "x-tra double cheesy fresh mozzerella cheese pizza ", "E che noddles pizza", "Tipsy-Tomato Tangy pizza", "Pepperio-peperoni pizza delight",
"Chicken tandoori pizza","non veg extravaganza pizza", "On the house special: Homemade style, hand toasted", "thin edge hearty vegtable 'n piza" 
                    ];


                    function getmenu(){
                        var htmldata;
                        menu_list_array.sort();
                                for(var i=0;i<menu_list_array.length;i++){
                                    htmldata=htmldata+ menu_list_array[i] + '<br>'
                                }
                                document.getElementById("display_menu").innerHTML = htmldata;
                                 
                        }
                        
                        function add_item(){
                        var htmldata;
                        var item=document.getElementById("add_item").value;
                                // use the sort function as - menu_list_array.sort();
                            menu_list_array.sort();
                            menu_list_array.push(item);

                                htmldata=""
                                for(var i=0;i<menu_list_array.length;i++){
                                    htmldata=htmldata+menu_list_array[i]+'<br>';
                                }
                                 document.getElementById("display_addedmenu").innerHTML = htmldata;		
                              }
                        
                        function add_top(){
                            var item=document.getElementById("add_item").value;
                            menu_list_array.push(item);
                            add_item();
                        }
                        