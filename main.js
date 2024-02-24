document.addEventListener("DOMContentLoaded", function () {
    const bookClass = document.querySelectorAll(".book");

    let currentDate = new Date();

    const fictChbx = window.parent.document.getElementById("fict-chbx");
    const nonficChbx = window.parent.document.getElementById("nonfic-chbx");
    const circulChbx = window.parent.document.getElementById("circul-chbx");
    const referChbx = window.parent.document.getElementById("refer-chbx");
    const shsChbx = window.parent.document.getElementById("shs-chbx");
    const engChbx = window.parent.document.getElementById("eng-chbx");
    const filChbx = window.parent.document.getElementById("fil-chbx");

    const searchBar = window.parent.document.getElementById("searchbar");
    const searchIc = window.parent.document.getElementById("search-ic");

    let scanIc;

    if (window.parent.document.getElementById("scanner-ic")) {
        scanIc = window.parent.document.getElementById("scanner-ic");
    }

    let fromInput;
    let toInput;

    if (window.document.querySelector("#from-input")) {
        fromInput = window.parent.document.getElementById("from-input");
    }
    if (window.document.querySelector("#to-input")) {
        toInput = window.parent.document.getElementById("to-input");
    }

    let applyBtn;
    let clearBtn;

    if (window.parent.document.querySelector("#apply-btn")) {
        applyBtn = window.parent.document.getElementById("apply-btn");
    }
    if (window.parent.document.querySelector("#clear-btn")) {
        clearBtn = window.parent.document.getElementById("clear-btn");
    }

    let booksIframe;
    if (window.document.querySelector(".books-iframe")) {
        booksIframe = window.parent.document.querySelector(".books-iframe");

        booksIframe.onload = function () {
            booksIframe.contentWindow.document.body.style.backgroundColor = "transparent";
        }
    }

    let stiLogo;

    if (window.parent.document.querySelector("#sti-logo")) {
        stiLogo = window.parent.document.getElementById("sti-logo");
        stiLogo.addEventListener("click", function () {
            location.reload;
        });
    }


    class Book {
        constructor(isbn, title, author, publisher, publishYear, bookIndex) {
            this.isbn = isbn;
            this.title = title;
            this.author = author;
            this.publisher = publisher;
            this.publishYear = publishYear;
            this.bookIndex = bookIndex;
        }
    }

    const hpGoblet = new Book("Harry Potter and the Goblet of Fire", "J.K Rowling", "Scholastic Press", 1997);
    const encycloEarth = new Book("Encyclopedia of Our Earth", "Shooting Star Press", "Shpoting Star Press", 1999);
    const malaySingapore = new Book("Malaysia and Singapore in Pictures (Visual Geography Series)", "James Nach", "Sterling Publishing Co, Inc.", 1972);
    const pinagyamangPluma = new Book("9789710639441", "Pinagyamang Pluma", "Alma M. Dayag, Mary Grace G", "Phoenix Publishing House", 2017);
    const dictThesaurus = new Book("Webster's Dictionary and Thesaurus", "Books are Fun", "Books are Fun", 2006);
    const lesMiser = new Book("Les Miserables", "Victor Hugo", "Fawcett Publications", 1987);
    const pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", "Penguin Publishing Group", 1994);
    const mazeRunner = new Book("The Maze Runner", "James Dashner", "James Dashner", 2017);
    const filipinoAlipin = new Book("Filipino, Isa Kang Alipin!", "Reynaldo Cruz Garcia", "Proverbs 1:7 Publishing House", 2004);
    const historyFilipino = new Book("History of The Filipino People", "Teodoro A. Agoncillo", "Garotech Publishing", 1990);
    const rizalBayaniGuro = new Book("Rizal (Ang Bayani at Guro)", "Crisanto C. Rivera, Domingo G. Landicho, Domingo V. Valenciano", "Rey-Carl Publishing House", 1971);
    const handbookBsp = new Book("Handbook for Boys", "Boy Scout of the Philippines", "Boy Scout of the Philippines", 1996);
    const whyDidntI = new Book("Why Did'nt I Think of That?", "Anthony Rubino, Jr.", "Adams Media", 2010);
    const thinkGrowRich = new Book("Think and Grow Rich!", "Napoleon Hill", "Napoleon Hill", 2007);
    const oldPunishments = new Book("Old Time Punishments", "William Andrews", "The Tabard Press Limited", 1992);
    const naturalHomeRemedies = new Book("Natural Home Remedies For Common Ailments", "H.K Bakhra", "Orient Paperbacks", 1996);
    const tasteWriting = new Book("Taste for Writing (Philippine Edition)", "Vivian C. Cadbury", "Cencage Learning", 2009);
    const ecoTaxation = new Book("Economics, Taxation, and Agrarian Reform (Revised Edition)", "Carlos L. Manapat, Fernando R. Pedrosa", "C & E Publishing, Inc.", 2017);
    const workingSuccessfuly = new Book("Working Successfully with Screwed- Up People", "Elizabeth B. Brown", "Revell", 2012);
    const statsProbVibal = new Book("Statistics and Probabilty", "Chin Uy, Ninia Calaca, Nestor Noble, Ronaldo Manalo", "Vibal Publishing House", 2016);
    const readingWritingVibal = new Book("Reading and Writing", "Andrew Rey S. Pena, Ali G. Anudin", "Vibal Publishing House", 2016);
    const oralComVibal = new Book("Oral Comunication", "Andrew Rey S. Pena, Ali G. Anudin", "Vibal Publishing House", 2016);
    const kompanJocson = new Book("Komunikasuon at Pananaliksik sa Wika at Kulturang Filipino", "Magdalena O. Jocson", "Vibal Publishing House", 2016);
    const earthNLifeSci = new Book("Earth and Life Science", "James Cesar Refran, Pamela Louise M. Tolentino, Ruth Marian Genuino", "Vibal Publishing House", 2016);
    const precalOxford = new Book("Pre-Calculus", "Reginaldo M. Marcelo, Inex Louisa Crisostomo", "Oxford University Press", 2018);
    const basicCalOxford = new Book("Basic Calculus", "Flordeliza F. Francisco, Agnes D. Garciano", "Oxford University Press", 2018);
    const pracVocab = new Book("Practical Vocabulary", "Judith N. Meyers", "LearningExpress LLC.", 2007);
    const exploringLifeSci = new Book("Exploring Life Through Science", "Jose T. Olivar II, Anna C. Morales-Ramos", "Phoenix Publishing House", 2016);
    const readingWritingFirsted = new Book("Reading and Writing Skills", "Marella Theresa A. Tionson, Maxine Rafaella C. Rodriguez", "Rex Book Store", 2015);
    const writingGrammar = new Book("Writing Grammar", "Joyce Armstrong Carroll, Edward E. Wilson, Gary Forlini", "Prentice Hall", 2000);
    const pilEngDict = new Book("Pilipino-English Dictionary (Abridged Edition)", "Vito C. Santos", "Anvil Publishing Inc.", 2006);
    const biyakBato = new Book("The Pact of Biyak na Bato and Ninay", "Pedro Alejandro Paterno", "National Historical Commission of the Philippines", 2004);

    class BooksList {
        constructor() {
            this.array = [];
        }

        // Add an element to the end of the list
        add(element) {
            this.array.push(element);
        }

        // Remove an element at a specified index
        remove(index) {
            if (index >= 0 && index < this.array.length) {
                this.array.splice(index, 1);
            }
        }

        // Get an element at a specified index
        get(index) {
            if (index >= 0 && index < this.array.length) {
                return this.array[index];
            }
            return undefined;
        }

        // Get the size of the list
        size() {
            return this.array.length;
        }

        indexOf(element) {
            return this.array.indexOf(element);
        }

        forEach(callback) {
            for (let i = 0; i < this.array.length; i++) {
                callback(this.array[i], i, this.array);
            }
        }
    }

    let booksList = new BooksList();
    booksList.add(hpGoblet);
    booksList.add(encycloEarth);
    booksList.add(malaySingapore);
    booksList.add(pinagyamangPluma);
    booksList.add(dictThesaurus);
    booksList.add(lesMiser);
    booksList.add(pridePrejudice);
    booksList.add(mazeRunner);
    booksList.add(filipinoAlipin);
    booksList.add(historyFilipino);
    booksList.add(rizalBayaniGuro);
    booksList.add(handbookBsp);
    booksList.add(whyDidntI);
    booksList.add(thinkGrowRich);
    booksList.add(oldPunishments);
    booksList.add(naturalHomeRemedies);
    booksList.add(tasteWriting);
    booksList.add(ecoTaxation);
    booksList.add(workingSuccessfuly);
    booksList.add(statsProbVibal);
    booksList.add(readingWritingVibal);
    booksList.add(oralComVibal);
    booksList.add(kompanJocson);
    booksList.add(earthNLifeSci);
    booksList.add(precalOxford);
    booksList.add(basicCalOxford);
    booksList.add(pracVocab);
    booksList.add(exploringLifeSci);
    booksList.add(readingWritingFirsted);
    booksList.add(writingGrammar);
    booksList.add(pilEngDict);
    booksList.add(biyakBato);


    booksList.forEach(existingBook => {
        existingBook.bookIndex = booksList.indexOf(existingBook);
    });

    bookClass.forEach(book => {

        book.addEventListener("click", function () {

            function isBookName(bookName) {
                if (book.classList.contains(bookName)) {
                    return true;
                }
                return false;
            }

            function displayBook(bookCoverSrc, bookObject) {
                const displayBookDiv = document.createElement("div");
                displayBookDiv.classList.add("display-book");
                displayBookDiv.style.animation = "popIn 0.5s"
                window.parent.document.body.appendChild(displayBookDiv);

                const blurBackground = document.createElement("div");
                blurBackground.classList.add("blur-bg");
                window.parent.document.body.appendChild(blurBackground);

                const flexWrapper = document.createElement("div");
                flexWrapper.classList.add("displaybook-flex");
                displayBookDiv.appendChild(flexWrapper);

                const bookCover = document.createElement("img");
                bookCover.src = bookCoverSrc;
                bookCover.classList.add("displaybook-cover");
                flexWrapper.appendChild(bookCover);

                const bookInfoContainer = document.createElement("div");
                bookInfoContainer.classList.add("book-info-container");
                flexWrapper.appendChild(bookInfoContainer);

                const bookTitle = document.createElement("h2");
                bookTitle.textContent = `\"${bookObject.title}\"`;
                bookInfoContainer.appendChild(bookTitle);

                const bookAuthor = document.createElement("h3");
                bookAuthor.textContent = `Author/s: ${bookObject.author}`;
                bookInfoContainer.appendChild(bookAuthor);

                const bookPublisher = document.createElement("h3");
                bookPublisher.textContent = `Publisher: ${bookObject.publisher}`;
                bookInfoContainer.appendChild(bookPublisher);

                const bookPublishYear = document.createElement("h3");
                bookPublishYear.textContent = `Year Published: ${bookObject.publishYear}`;
                bookInfoContainer.appendChild(bookPublishYear);

                const borrowBookBtn = document.createElement("button");
                borrowBookBtn.textContent = "BORROW";
                borrowBookBtn.style.marginTop = "30px";
                borrowBookBtn.classList.add("displaybook-btn-styling");
                bookInfoContainer.appendChild(borrowBookBtn);

                const closeBtn = document.createElement("button");
                closeBtn.textContent = "CLOSE";
                closeBtn.style.marginTop = "20px";
                closeBtn.classList.add("displaybook-btn-styling");
                bookInfoContainer.appendChild(closeBtn);

                const borrowBookLogin = document.createElement("div");
                const borrowingDirections = document.createElement("h2");
                borrowingDirections.textContent = "A quick and easy way to borrow books from the library! Just type in your student number and reminders about the book will be sent to your school email."
                const studentNumInput = document.createElement("input");
                studentNumInput.placeholder = "Student Number"
                const borrowingTxt = document.createElement("p");
                const borrowedOnTxt = document.createElement("p");
                const returnOnTxt = document.createElement("p");
                const confirmBtn = document.createElement("button");
                confirmBtn.textContent = "Confirm"
                const cancelBtn = document.createElement("button");
                cancelBtn.textContent = "Cancel"

                borrowBookBtn.addEventListener("click", function () {
                    blurBackground.style.zIndex = "4"

                    borrowBookLogin.style.animation = "slideDown 0.5s 1";

                    borrowBookLogin.classList.add("borrow-book-login");
                    borrowingDirections.classList.add("h2-styling");
                    studentNumInput.classList.add("input-styling");
                    borrowingTxt.classList.add("p-styling");
                    borrowedOnTxt.classList.add("p-styling");
                    returnOnTxt.classList.add("p-styling");
                    confirmBtn.classList.add("displaybook-btn-styling");
                    cancelBtn.classList.add("displaybook-btn-styling");

                    window.parent.document.body.appendChild(borrowBookLogin);
                    borrowBookLogin.appendChild(borrowingDirections);
                    borrowBookLogin.appendChild(studentNumInput);
                    borrowBookLogin.appendChild(borrowingTxt);
                    borrowBookLogin.appendChild(borrowedOnTxt);
                    borrowBookLogin.appendChild(returnOnTxt);
                    borrowBookLogin.appendChild(confirmBtn);
                    borrowBookLogin.appendChild(cancelBtn);

                    studentNumInput.focus();

                    borrowingTxt.textContent = `You're Borrowing: ${bookObject.title}`;
                    borrowedOnTxt.textContent = `Borrowed On: ${currentDate.toLocaleString()}`;
                    let returnDate = new Date();
                    returnDate.setDate(currentDate.getDate() + 7);
                    returnDate.setHours(-6, 0, 0);
                    returnOnTxt.textContent = `Return by: ${returnDate.toLocaleString()}`;

                });

                cancelBtn.addEventListener("click", function () {
                    borrowBookLogin.style.animation = "slideUp 0.5s 1";
                    blurBackground.style.zIndex = "2";
                    setTimeout(() => {
                        borrowBookLogin.remove();
                    }, 500);
                });

                closeBtn.addEventListener("click", function () {
                    displayBookDiv.style.animation = "popInReverse 0.3s 1";
                    blurBackground.remove();
                    setTimeout(() => {
                        displayBookDiv.remove();
                    }, 200);
                });

            }

            if (isBookName("hp-goblet")) {
                displayBook("img/book-covers/hp-goblet.jpg", hpGoblet);
            }
            else if (isBookName("encyclo-earth")) {
                displayBook("img/book-covers/encyclo-earth.jpg", encycloEarth);
            }
            else if (isBookName("malay-singapore")) {
                displayBook("img/book-covers/malay-singapore.jpg", malaySingapore);
            }
            else if (isBookName("pinagyamang-pluma")) {
                displayBook("img/book-covers/pinagyamang-pluma.jpg", pinagyamangPluma);
            }
            else if (isBookName("dict-thesaurus")) {
                displayBook("img/book-covers/dict-thesaurus.jpg", dictThesaurus);
            }
            else if (isBookName("les-miser")) {
                displayBook("img/book-covers/les-miser.jpg", lesMiser);
            }
            else if (isBookName("pride-prejudice")) {
                displayBook("img/book-covers/pride-prejudice.jpg", pridePrejudice);
            }
            else if (isBookName("maze-runner")) {
                displayBook("img/book-covers/maze-runner.jpg", mazeRunner);
            }
            else if (isBookName("filipino-alipin")) {
                displayBook("img/book-covers/filipino-alipin.jpg", filipinoAlipin);
            }
            else if (isBookName("history-filipino")) {
                displayBook("img/book-covers/history-filipino.jpg", historyFilipino);
            }
            else if (isBookName("rizal-bayani-guro")) {
                displayBook("img/book-covers/rizal-bayani-guro.jpg", rizalBayaniGuro);
            }
            else if (isBookName("handbook-bsp")) {
                displayBook("img/book-covers/handbook-bsp.jpg", handbookBsp);
            }
            else if (isBookName("why-didnt-i")) {
                displayBook("img/book-covers/why-didnt-i.jpg", whyDidntI);
            }
            else if (isBookName("think-grow-rich")) {
                displayBook("img/book-covers/think-grow-rich.jpg", thinkGrowRich);
            }
            else if (isBookName("old-punishments")) {
                displayBook("img/book-covers/old-punishments.jpg", oldPunishments);
            }
            else if (isBookName("natural-home-remedies")) {
                displayBook("img/book-covers/natural-home-remedies.jpg", naturalHomeRemedies);
            }
            else if (isBookName("taste-writing-ph")) {
                displayBook("img/book-covers/taste-writing-ph.jpg", tasteWriting);
            }
            else if (isBookName("eco-taxation")) {
                displayBook("img/book-covers/eco-taxation.jpg", ecoTaxation);
            }
            else if (isBookName("working-successfully")) {
                displayBook("img/book-covers/working-successfully.jpg", workingSuccessfuly);
            }
            else if (isBookName("stats-prob-vibal")) {
                displayBook("img/book-covers/stats-prob-vibal.jpg", statsProbVibal);
            }
            else if (isBookName("reading-writing-vibal")) {
                displayBook("img/book-covers/reading-writing-vibal.jpg", readingWritingVibal);
            }
            else if (isBookName("oral-com-vibal")) {
                displayBook("img/book-covers/oral-com-vibal.jpg", oralComVibal);
            }
            else if (isBookName("kompan-jocson")) {
                displayBook("img/book-covers/kompan-jocson.jpg", kompanJocson);
            }
            else if (isBookName("earthnlife-sci")) {
                displayBook("img/book-covers/earthnlife-sci.jpg", earthNLifeSci);
            }
            else if (isBookName("precal-oxford")) {
                displayBook("img/book-covers/precal-oxford.jpg", precalOxford);
            }
            else if (isBookName("basic-cal-oxford")) {
                displayBook("img/book-covers/basic-cal-oxford.jpg", basicCalOxford);
            }
            else if (isBookName("prac-vocab")) {
                displayBook("img/book-covers/prac-vocab.jpg", pracVocab);
            }
            else if (isBookName("exploringlife-sci")) {
                displayBook("img/book-covers/exploringlife-sci.jpg", exploringLifeSci);
            }
            else if (isBookName("reading-writing-firsted")) {
                displayBook("img/book-covers/reading-writing-firsted.jpg", readingWritingFirsted);
            }
            else if (isBookName("writing-grammar")) {
                displayBook("img/book-covers/writing-grammar.jpg", writingGrammar);
            }
            else if (isBookName("pil-eng-dict")) {
                displayBook("img/book-covers/pil-eng-dict.jpg", pilEngDict);
            }
            else if (isBookName("biyak-bato")) {
                displayBook("img/book-covers/biyak-bato.jpg", biyakBato);
            }
            
            if (scanIc != null) {
                scanIc.addEventListener("click", function () {
                    const displayScanDiv = document.createElement("div");
                    displayScanDiv.classList.add("scan-barcode");
                    displayScanDiv.style.animation = "slideDown 0.5s";
                    window.parent.document.body.appendChild(displayScanDiv);

                    const blurBackground = document.createElement("div");
                    blurBackground.classList.add("blur-bg");
                    window.parent.document.body.appendChild(blurBackground);

                    const scanDirections = document.createElement("h3");
                    scanDirections.textContent = "Scan the ISBN of the book using the barcode scanner";
                    scanDirections.style.fontSize = "2rem";
                    scanDirections.style.textAlign = "center";
                    displayScanDiv.appendChild(scanDirections);

                    const scannerInput = document.createElement("input");
                    displayScanDiv.appendChild(scannerInput);

                    scannerInput.focus();

                    const checkInputVal = setInterval(() => {
                        if (scannerInput.value.trim() != "") {
                            if (scannerInput.value.trim() === pinagyamangPluma.isbn) {

                                displayBook("img/book-covers/pinagyamang-pluma.jpg", pinagyamangPluma);
                                displayScanDiv.style.animation = "slideUp 0.5s 1";

                                clearInterval(checkInputVal); 
                                
                                blurBackground.remove();
                                setTimeout(() => {
                                    displayScanDiv.remove();
                                }, 500);

                            }
                        }
                    }, 500);

                    const closeBtnScan = document.createElement("button");
                    closeBtnScan.classList.add("displaybook-btn-styling");
                    closeBtnScan.textContent = "CLOSE";
                    displayScanDiv.appendChild(closeBtnScan);

                    closeBtnScan.addEventListener("click", function () {
                        displayScanDiv.style.animation = "slideUp 0.5s 1";
                        blurBackground.remove();
                        setTimeout(() => {
                            displayScanDiv.remove();
                        }, 500);

                    });

                });
            }
        });

        function runFilter(filter) {
            if (!book.classList.contains(filter)) {
                book.remove();
            }
        }

        if (applyBtn != null) {
            applyBtn.addEventListener("click", function () {

                window.parent.document.querySelector(".status-txt").textContent = "Filter Results:";

                if (fictChbx.checked) {
                    runFilter("fiction");
                }
                if (nonficChbx.checked) {
                    runFilter("nonfiction");
                }
                if (circulChbx.checked) {
                    runFilter("circulation");
                }
                if (referChbx.checked) {
                    runFilter("reference");
                }
                if (shsChbx.checked) {
                    runFilter("shs");
                }
                if (engChbx.checked) {
                    runFilter("eng");
                }
                if (filChbx.checked) {
                    runFilter("fil");
                }
            });
        }

        if (fromInput != null) {
            if (!fromInput.value != "") {

            }
        }

    });

    if (clearBtn != null) {
        clearBtn.addEventListener("click", function () {
            location.reload();
        });
    }


});