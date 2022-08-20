let db = [{
                name: 'Victor',
                code: 1601416,
                age: 14,
                length: 160,
                weight: 42,
                money: 252
            },
            {
                name: 'Taras',
                code: 1423243,
                age: 19,
                length: 180,
                weight: 50,
                money: 1000
            },
            {
                name: 'Alex',
                code: 4533333,
                age: 10,
                length: 110,
                weight: 45,
                money: 10
            },
            {
                name: 'Nastya',
                code: 89878789,
                age: 20,
                length: 160,
                weight: 60,
                money: 776
            },
            {
                name: 'Oleg',
                code: 66787998,
                age: 30,
                length: 180,
                weight: 90,
                money: 12323
            },
            {
                name: 'Valera',
                code: 76787876,
                age: 17,
                length: 190,
                weight: 110,
                money: 12
            },
            {
                name: 'John',
                code: 34343422,
                age: 9,
                length: 90,
                weight: 30,
                money: 776
            },
            {
                name: 'Yura',
                code: 7888765,
                age: 14,
                length: 150,
                weight: 56,
                money: 8998
            },
            {
                name: 'Andrii',
                code: 8898788,
                age: 18,
                length: 170,
                weight: 77,
                money: 677
            },
            {
                name: 'Yulia',
                code: 1215456,
                age: 7,
                length: 80,
                weight: 34,
                money: 0
            }
        ];

        //        1. вивести кількість користувачів в консоль
        //        console.log(db.length);

        //        2. вивести в консоль імена всіх людей
        //        for (let i = 0; i < db.length; i++) { // console.log(db[i].name); // }
        //        3.   2. вивести в консоль імена всіх людей вік який більше = за 10
        //        for (let i = 0; i < db.length; i++) {
        //            if (db[i].age >= 10) {
        //                console.log(db[i].name);
        //            }
        //        }
        //        4. вивести число людей вага яких більша = за 40

        //        let n = 0;
        //        for (let i = 0; i < db.length; i++) {
        //            if (db[i].weight >= 40) {
        //               n++;
        //            }
        //
        //        }
        //        console.log(n);

        //        5. Порахувати суму грошей всіх людей

        //        let sum = 0;
        //        for (let i = 0; i < db.length; i++) {
        //            sum+=db[i].money;
        //        }
        //        
        //        console.log(sum);

        //        6. Вивести в консоль імена людей в яких остання літера в імені (а)

        //        for (let i = 0; i < db.length; i++) {
        //         if(db[i].name.at(-1)=='a'){
        //             console.log(db[i].name);
        //         }
        //        }
        //        7. Вивести в консоль імена людей в яких друга літера в імені (а)

        //        8. Вивести в консоль імена людей в яких парний код


        //        9. посортувати людей з парними і непарними кодами в різні масиви (імя код)
        //
        //        let pe = [];
        //        let ne = [];
        //        for (let i = 0; i < db.length; i++) {
        //            if (db[i].code % 2 == 0) {
        //                pe.push({
        //                    code: db[i].code,
        //                    name: db[i].name
        //                });
        //            } else {
        //                ne.push({
        //                    code: db[i].code,
        //                    name: db[i].name
        //                });
        //            }
        //        }
        //        
        //        console.log(pe);
        //        console.log(ne);


        //        10. вивести на сторінку користувачів у форматі код-імя-вік

        for (let i = 0; i < db.length; i++) {
            $('.userContainer').append(`<div class='userItem' id='c${db[i].code}'>
            <span>${db[i].code}</span>
            <span>${db[i].name}</span>
            <span>${db[i].age}</span>
        </div>`);
        }


        $('.userItem').click(function(e) {
            let userID = (e.target.id).substring(1);
            for (let i = 0; i < db.length; i++) {
                if (db[i].code == userID) {
                    alert(db[i].money + '$');
                }
            }
        });

        $('#applyBtn').click(function() {
            let minAge = $('#minAge').val();
            let maxAge = $('#maxAge').val();
            $('.userContainer').empty();
            for (let i = 0; i < db.length; i++) {
                if (db[i].age >= minAge && db[i].age <= maxAge) {
                    $('.userContainer').append(`<div class='userItem' id='c${db[i].code}'>
            <span>${db[i].code}</span>
            <span>${db[i].name}</span>
            <span>${db[i].age}</span>
        </div>`);
                }

            }
            $('.userContainer').css("flex-direction", "column")
        })

        $('#lengthInput').on('input', function() {
            let currentLen = $('#lengthInput').val();
            $('#lengthValue').text(currentLen);

            $('.userContainer').empty();
            for (let i = 0; i < db.length; i++) {
                if (db[i].length == currentLen) {
                    $('.userContainer').append(`<div class='userItem' id='c${db[i].code}'>
            <span>${db[i].code}</span>
            <span>${db[i].name}</span>
            <span>${db[i].age}</span>
        </div>`);
                }

            }
            $('.userContainer').css("flex-direction", "column")
        })

        $('#sortAl').click(function(e) {
            let userName = []
            let userN = []
            for (let i = 0; i < db.length; i++) {
                userName.push(db[i].name)
            }
            userName.sort()
            console.log(userName)
            for (let i = 0; i < userName.length; i++) {
                for (let b = 0; b < db.length; b++) {
                    if (db[b].name == userName[i]) {
                        userN.push(db[b])
                    }
                }
            }
            //            console.log(userN)
            $('.userContainer').empty();
            for (let i = 0; i < userN.length; i++) {
                $('.userContainer').append(`<div class='userItem' id='c${userN[i].code}'>
            <span>${userN[i].code}</span>
            <span>${userN[i].name}</span>
            <span>${userN[i].age}</span>
        </div>`);
            }
            $('.userItem').click(function(e) {
                let userID = (e.target.id).substring(1);
                for (let i = 0; i < userN.length; i++) {
                    if (userN[i].code == userID) {
                        alert(userN[i].money + '$');
                    }
                }
            });
            $('.userContainer').css("flex-direction", "column")
        })

        $('#sortLa').click(function(e) {
            let userName = []
            let userN = []
            for (let i = 0; i < db.length; i++) {
                userName.push(db[i].name)
            }
            userName.sort()
            console.log(userName)
            for (let i = db.length; i > -1; i--) {
                for (let b = 0; b < db.length; b++) {
                    if (db[b].name == userName[i]) {
                        userN.push(db[b])
                    }
                }
            }
            console.log(userN)
            $('.userContainer').empty();
            for (let i = 0; i < userN.length; i++) {
                $('.userContainer').append(`<div class='userItem' id='c${userN[i].code}'>
                <span>${userN[i].code}</span>
                <span>${userN[i].name}</span>
                <span>${userN[i].age}</span>
                </div>`);
            }
            $('.userItem').click(function(e) {
                let userID = (e.target.id).substring(1);
                for (let i = 0; i < userN.length; i++) {
                    if (userN[i].code == userID) {
                        alert(userN[i].money + '$');
                    }
                }
            });
            $('.userContainer').css("flex-direction", "column")
        })

        //        $('#sortYo').click(function() {
        //            let userAge = [];
        //            let userA = [];
        //            for (let i = 0; i < db.length; i++) {
        //                userAge.push(db[i].age);
        //            };
        //            userAge.sort(function(a, b) {
        //                return a - b;
        //            });
        //            console.log(userAge);
        //            for (let i = 0; i < db.length; i++) {
        //                for (let b = 0; b < db.length; b++) {
        //                    if(db[b].age == userAge[i]){
        //                        userA.push(db[b]);
        //                        b++;
        //                    };
        //                };
        //            };
        //            console.log(userA);
        //            $('.userContainer').empty();
        //            for (let i = 0; i < userA.length; i++) {
        //                $('.userContainer').append(`<div class='userItem' id='c${userA[i].code}'>
        //                            <span>${userA[i].code}</span>
        //                            <span>${userA[i].name}</span>
        //                            <span>${userA[i].age}</span>
        //                            </div>`);
        //            };
        //            $('.userItem').click(function(e) {
        //                let userID = (e.target.id).substring(1);
        //                for (let i = 0; i < userA.length; i++) {
        //                    if (userA[i].code == userID) {
        //                        alert(userA[i].money + '$');
        //                    };
        //                };
        //            });
        //        });

        //        $('#sortOl').click(function() {
        //            let userAge = []
        //            let userA = []
        //            for (let i = 0; i < db.length; i++) {
        //                userAge.push(db[i].age)
        //            }
        //            userAge.sort(function(a, b) {
        //                return a - b
        //            });
        //            console.log(userAge)
        //            for (let i = 0; i < db.length; i++) {
        //                for (let b = 0; b < db.length; b++) {
        //                    if(db[b].age == userAge[i]){
        //                        userA.push(db[b])
        //                        b++
        //                    }
        //                }
        //            }
        //            console.log(userA);
        //            $('.userContainer').empty();
        //            for (let i = 0; i < userA.length; i++) {
        //                $('.userContainer').append(`<div class='userItem' id='c${userA[i].code}'>
        //                            <span>${userA[i].code}</span>
        //                            <span>${userA[i].name}</span>
        //                            <span>${userA[i].age}</span>
        //                            </div>`);
        //            }
        //            $('.userItem').click(function(e) {
        //                let userID = (e.target.id).substring(1);
        //                for (let i = 0; i < userA.length; i++) {
        //                    if (userA[i].code == userID) {
        //                        alert(userA[i].money + '$');
        //                    }
        //                }
        //            });
        //            $('.userContainer').css("flex-direction", "column-reverse")
        //        })

        $('#sortYo').click(function() {
            let userAge = [];
            let userA = [];
            for (let i = 0; i < db.length; i++) {
                userAge.push(db[i].age);
            };
            userAge.sort(function(a, b) {
                return a - b;
            });
            for (let i = 0; i < userAge.length; i++) {
                if (userAge[i] == userAge[i - 1]) {
                    userAge.splice(i, 1)
                }
            }
            for (let i = 0; i < db.length; i++) {
                for (let b = 0; b < db.length; b++) {
                    if (db[b].age == userAge[i]) {
                        userA.push(db[b])
                        b++
                    }
                }
            }
            console.log(userA);
            $('.userContainer').empty();
            for (let i = 0; i < userA.length; i++) {
                $('.userContainer').append(`<div class='userItem' id='c${userA[i].code}'>
                                    <span>${userA[i].code}</span>
                                    <span>${userA[i].name}</span>
                                    <span>${userA[i].age}</span>
                                    </div>`);
            }
            console.log(userAge);
            $('.userItem').click(function(e) {
                let userID = (e.target.id).substring(1);
                for (let i = 0; i < userA.length; i++) {
                    if (userA[i].code == userID) {
                        alert(userA[i].money + '$');
                    }
                }
            });
            $('.userContainer').css("flex-direction", "column")
        })

        $('#sortOl').click(function() {
            let userAge = [];
            let userA = [];
            for (let i = 0; i < db.length; i++) {
                userAge.push(db[i].age);
            };
            userAge.sort(function(a, b) {
                return a - b;
            });
            for (let i = 0; i < userAge.length; i++) {
                if (userAge[i] == userAge[i - 1]) {
                    userAge.splice(i, 1)
                }
            }
            for (let i = 0; i < db.length; i++) {
                for (let b = 0; b < db.length; b++) {
                    if (db[b].age == userAge[i]) {
                        userA.push(db[b])
                        b++
                    }
                }
            }
            console.log(userA);
            $('.userContainer').empty();
            for (let i = 0; i < userA.length; i++) {
                $('.userContainer').append(`<div class='userItem' id='c${userA[i].code}'>
                                    <span>${userA[i].code}</span>
                                    <span>${userA[i].name}</span>
                                    <span>${userA[i].age}</span>
                                    </div>`);
            }
            console.log(userAge);
            $('.userItem').click(function(e) {
                let userID = (e.target.id).substring(1);
                for (let i = 0; i < userA.length; i++) {
                    if (userA[i].code == userID) {
                        alert(userA[i].money + '$');
                    }
                }
            });
            $('.userContainer').css("flex-direction", "column-reverse")
        })

        $('#sortMo').click(function() {
            let userMoney = [];
            let userM = [];
            for (let i = 0; i < db.length; i++) {
                userMoney.push(db[i].money);
            };
            userMoney.sort(function(a, b) {
                return a - b;
            });
            for (let i = 0; i < userMoney.length; i++) {
                if (userMoney[i] == userMoney[i - 1]) {
                    userMoney.splice(i, 1)
                }
            }
            for (let i = 0; i < db.length; i++) {
                for (let b = 0; b < db.length; b++) {
                    if (db[b].money == userMoney[i]) {
                        userM.push(db[b])
                        b++
                    }
                }
            }
            console.log(userMoney)
            console.log(userM)
            $('.userContainer').empty();
            for (let i = 0; i < userM.length; i++) {
                $('.userContainer').append(`<div class='userItem' id='c${userM[i].code}'>
                                    <span>${userM[i].code}</span>
                                    <span>${userM[i].name}</span>
                                    <span>${userM[i].age}</span>
                                    </div>`);
            }
            //            console.log(userAge);
            $('.userItem').click(function(e) {
                let userID = (e.target.id).substring(1);
                for (let i = 0; i < userM.length; i++) {
                    if (userM[i].code == userID) {
                        alert(userM[i].money + '$');
                    }
                }
            });
            $('.userContainer').css("flex-direction", "column-reverse")
        });

        $('#sortMo').click(function() {
            let userMoney = [];
            let userM = [];
            for (let i = 0; i < db.length; i++) {
                userMoney.push(db[i].money);
            };
            userMoney.sort(function(a, b) {
                return a - b;
            });
            for (let i = 0; i < userMoney.length; i++) {
                if (userMoney[i] == userMoney[i - 1]) {
                    userMoney.splice(i, 1)
                }
            }
            for (let i = 0; i < db.length; i++) {
                for (let b = 0; b < db.length; b++) {
                    if (db[b].money == userMoney[i]) {
                        userM.push(db[b])
                        b++
                    }
                }
            }
            console.log(userMoney)
            console.log(userM)
            $('.userContainer').empty();
            for (let i = 0; i < userM.length; i++) {
                $('.userContainer').append(`<div class='userItem' id='c${userM[i].code}'>
                                    <span>${userM[i].code}</span>
                                    <span>${userM[i].name}</span>
                                    <span>${userM[i].age}</span>
                                    </div>`);
            }
            //            console.log(userAge);
            $('.userItem').click(function(e) {
                let userID = (e.target.id).substring(1);
                for (let i = 0; i < userM.length; i++) {
                    if (userM[i].code == userID) {
                        alert(userM[i].money + '$');
                    }
                }
            });
            $('.userContainer').css("flex-direction", "column-reverse")
        });
        
        $('#sortNo').click(function() {
            let userMoney = [];
            let userM = [];
            for (let i = 0; i < db.length; i++) {
                userMoney.push(db[i].money);
            };
            userMoney.sort(function(a, b) {
                return a - b;
            });
            for (let i = 0; i < userMoney.length; i++) {
                if (userMoney[i] == userMoney[i - 1]) {
                    userMoney.splice(i, 1)
                }
            }
            for (let i = 0; i < db.length; i++) {
                for (let b = 0; b < db.length; b++) {
                    if (db[b].money == userMoney[i]) {
                        userM.push(db[b])
                        b++
                    }
                }
            }
            console.log(userMoney)
            console.log(userM)
            $('.userContainer').empty();
            for (let i = 0; i < userM.length; i++) {
                $('.userContainer').append(`<div class='userItem' id='c${userM[i].code}'>
                                    <span>${userM[i].code}</span>
                                    <span>${userM[i].name}</span>
                                    <span>${userM[i].age}</span>
                                    </div>`);
            }
            //            console.log(userAge);
            $('.userItem').click(function(e) {
                let userID = (e.target.id).substring(1);
                for (let i = 0; i < userM.length; i++) {
                    if (userM[i].code == userID) {
                        alert(userM[i].money + '$');
                    }
                }
            });
            $('.userContainer').css("flex-direction", "column")
        });