{"filter":false,"title":"paypal.js","tooltip":"/Cornucopia/js/paypal.js","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":41,"column":13},"action":"insert","lines":["<script>","        paypal.Button.render({","","            env: 'sandbox', // sandbox | production","","            // PayPal Client IDs - replace with your own","            // Create a PayPal app: https://developer.paypal.com/developer/applications/create","            client: {","                sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',","                production: '<insert production client id>'","            },","","            // Show the buyer a 'Pay Now' button in the checkout flow","            commit: true,","","            // payment() is called when the button is clicked","            payment: function(data, actions) {","","                // Make a call to the REST api to create the payment","                return actions.payment.create({","                    payment: {","                        transactions: [","                            {","                                amount: { total: '0.01', currency: 'USD' }","                            }","                        ]","                    }","                });","            },","","            // onAuthorize() is called when the buyer approves the payment","            onAuthorize: function(data, actions) {","","                // Make a call to the REST api to execute the payment","                return actions.payment.execute().then(function() {","                    window.alert('Payment Complete!');","                });","            }","","        }, '#paypal-button-container');","","    </script>"],"id":1}],[{"start":{"row":40,"column":0},"end":{"row":41,"column":13},"action":"remove","lines":["","    </script>"],"id":2}],[{"start":{"row":39,"column":39},"end":{"row":40,"column":0},"action":"remove","lines":["",""],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["<script>",""],"id":4}],[{"start":{"row":7,"column":25},"end":{"row":7,"column":28},"action":"remove","lines":["   "],"id":5},{"start":{"row":20,"column":39},"end":{"row":21,"column":28},"action":"remove","lines":["","                            "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]},{"start":{"row":22,"column":24},"end":{"row":22,"column":28},"action":"remove","lines":["    "]},{"start":{"row":22,"column":25},"end":{"row":23,"column":24},"action":"remove","lines":["","                        "]},{"start":{"row":36,"column":39},"end":{"row":37,"column":8},"action":"insert","lines":["","        "]}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":8},"action":"remove","lines":["    "],"id":6}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":4},"action":"remove","lines":["    "],"id":7}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "],"id":8},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"remove","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"remove","lines":["    "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"remove","lines":["    "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"remove","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"remove","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"remove","lines":["    "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["    "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["    "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"remove","lines":["    "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "],"id":9},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"remove","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"remove","lines":["    "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"remove","lines":["    "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"remove","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"remove","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"remove","lines":["    "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["    "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["    "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"remove","lines":["    "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":28,"column":18},"end":{"row":28,"column":18},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1541109959960,"hash":"7b50bc1135e8208584232df108aff98953401e88"}