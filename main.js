document.addEventListener("DOMContentLoaded", function () {
    let currentDate = new Date();

    const fictChbx = window.parent.document.getElementById("fict-chbx");
    const nonficChbx = window.parent.document.getElementById("nonfic-chbx");
    const circulChbx = window.parent.document.getElementById("circul-chbx");
    const referChbx = window.parent.document.getElementById("refer-chbx");
    const shsChbx = window.parent.document.getElementById("shs-chbx");
    const engChbx = window.parent.document.getElementById("eng-chbx");
    const filChbx = window.parent.document.getElementById("fil-chbx");

    const siteBackgroundImage = window.parent.document.querySelector(".background");
    siteBackgroundImage.style.backgroundImage = "img/background.jpg"

    const searchBar = window.parent.document.getElementById("searchbar");
    const searchIc = window.parent.document.getElementById("search-ic");

    const scanIc = window.document.getElementById("scanner-ic");

    const fromInput = window.parent.document.getElementById("from-input");
    const toInput = window.parent.document.getElementById("to-input");``
 
    const applyBtn = window.parent.document.getElementById("apply-btn");
    const clearBtn = window.parent.document.getElementById("clear-btn");

    const booksIframe = window.parent.document.querySelector(".books-iframe");
    booksIframe.onload = function () {
        booksIframe.contentWindow.document.body.style.backgroundColor = "transparent";
    }

    const shelf = document.querySelector(".shelf");

    window.parent.document.getElementById("sti-logo").addEventListener("click", function () {
        location.reload();
    });

    class Book {
        constructor(title, author, publisher, publishYear, isbn, coverImgSrc, category, bookIndex) {
            this.title = title;
            this.author = author;
            this.publisher = publisher;
            this.publishYear = publishYear;
            this.isbn = isbn;
            this.coverImgSrc = coverImgSrc;
            this.category = category;
            this.bookIndex = bookIndex;
        }
    }

    const hpGoblet = new Book("Harry Potter and the Goblet of Fire", "J.K Rowling", "Scholastic Press", 1997, "9780439139595", "img/book-covers/hp-goblet.jpg", "eng fcn circulation");
    const encycloEarth = new Book("Encyclopedia of Our Earth", "Shooting Star Press", "Shpoting Star Press", 1999, "1223456", "img/book-covers/encyclo-earth.jpg", "eng nonfiction reference");
    const malaySingapore = new Book("Malaysia and Singapore in Pictures (Visual Geography Series)", "James Nach", "Sterling Publishing Co, Inc.", 1972, "1223456", "img/book-covers/malay-singapore.jpg", "eng nonfiction reference");
    const pinagyamangPluma = new Book("Pinagyamang Pluma", "Alma M. Dayag, Mary Grace G", "Phoenix Publishing House", 2017, "9789710639441", "img/book-covers/pinagyamang-pluma.jpg", "fil nonfiction circulation shs");
    const dictThesaurus = new Book("Webster's Dictionary and Thesaurus", "Books are Fun", "Books are Fun", 2006, "1223456", "img/book-covers/dict-thesaurus.jpg", "eng nonfiction reference");
    const lesMiser = new Book("Les Miserables", "Victor Hugo", "Fawcett Publications", 1987, "9780375895003", "img/book-covers/les-miser.jpg", "eng fcn circulation");
    const pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", "Penguin Publishing Group", 1994, "1223456", "img/book-covers/pride-prejudice.jpg", "eng fcn circulation");
    const mazeRunner = new Book("The Maze Runner", "James Dashner", "James Dashner", 2017, "1223456", "img/book-covers/maze-runner.jpg", "eng fcn circulation");
    const filipinoAlipin = new Book("Filipino, Isa Kang Alipin!", "Reynaldo Cruz Garcia", "Proverbs 1:7 Publishing House", 2004, "1223456", "img/book-covers/filipino-alipin.jpg", "fil nonfiction circulation");
    const historyFilipino = new Book("History  of The Filipino People", "Teodoro A. Agoncillo", "Garotech Publishing", 1990, "1223456", "img/book-covers/history-filipino.jpg", "fil nonfiction circulation");
    const rizalBayaniGuro = new Book("Rizal (Ang Bayani at Guro)", "Crisanto C. Rivera, Domingo G. Landicho, Domingo V. Valenciano", "Rey-Carl Publishing House", 1971, "1223456", "img/book-covers/rizal-bayani-guro.jpg", "fil nonfiction circulation");
    const handbookBsp = new Book("Handbook for Boys", "Boy Scout of the Philippines", "Boy Scout of the Philippines", 1996, "1223456", "img/book-covers/handbook-bsp.jpg", "eng fil nonfiction circulation");
    const whyDidntI = new Book("Why Did'nt I Think of That?", "Anthony Rubino, Jr.", "Adams Media", 2010, "1223456", "img/book-covers/why-didnt-i.jpg", "eng nonfiction circulation");
    const thinkGrowRich = new Book("Think and Grow Rich!", "Napoleon Hill", "Napoleon Hill", 2007, "1223456", "img/book-covers/think-grow-rich.jpg", "eng nonfiction circulation");
    const oldPunishments = new Book("Old Time Punishments", "William Andrews", "The Tabard Press Limited", 1992, "1223456", "img/book-covers/old-punishments.jpg", "eng nonfiction circulation");
    const naturalHomeRemedies = new Book("Natural Home Remedies For Common Ailments", "H.K Bakhra", "Orient Paperbacks", 1996, "1223456", "img/book-covers/natural-home-remedies.jpg", "eng nonfiction circulation");
    const tasteWriting = new Book("Taste for Writing (Philippine Edition)", "Vivian C. Cadbury", "Cencage Learning", 2009, "1223456", "img/book-covers/taste-writing-ph.jpg", "eng nonfiction circulation");
    const ecoTaxation = new Book("Economics, Taxation, and Agrarian Reform (Revised Edition)", "Carlos L. Manapat, Fernando R. Pedrosa", "C & E Publishing, Inc.", 2017, "1223456", "img/book-covers/eco-taxation.jpg", "eng nonfiction circulation");
    const workingSuccessfuly = new Book("Working Successfully with Screwed- Up People", "Elizabeth B. Brown", "Revell", 2012, "1223456", "img/book-covers/working-successfully.jpg", "eng nonfiction circulation");
    const statsProbVibal = new Book("Statistics and Probabilty", "Chin Uy, Ninia Calaca, Nestor Noble, Ronaldo Manalo", "Vibal Publishing House", 2016, "1223456", "img/book-covers/stats-prob-vibal.jpg", "eng nonfiction circulation shs");
    const readingWritingVibal = new Book("Reading and Writing", "Andrew Rey S. Pena, Ali G. Anudin", "Vibal Publishing House", 2016, "1223456", "img/book-covers/reading-writing-vibal.jpg", "eng nonfiction circulation shs");
    const oralComVibal = new Book("Oral Comunication", "Andrew Rey S. Pena, Ali G. Anudin", "Vibal Publishing House", 2016, "1223456", "img/book-covers/oral-com-vibal.jpg", "eng nonfiction circulation shs");
    const kompanJocson = new Book("Komunikasuon at Pananaliksik sa Wika at Kulturang Filipino", "Magdalena O. Jocson", "Vibal Publishing House", 2016, "1223456", "img/book-covers/kompan-jocson.jpg", "fil nonfiction circulation shs");
    const earthNLifeSci = new Book("Earth and Life Science", "James Cesar Refran, Pamela Louise M. Tolentino, Ruth Marian Genuino", "Vibal Publishing House", 2016, "1223456", "img/book-covers/earthnlife-sci.jpg", "eng nonfiction circulation shs");
    const precalOxford = new Book("Pre-Calculus", "Reginaldo M. Marcelo, Inex Louisa Crisostomo", "Oxford University Press", 2018, "1223456", "img/book-covers/precal-oxford.jpg", "eng nonfiction circulation shs");
    const basicCalOxford = new Book("Basic Calculus", "Flordeliza F. Francisco, Agnes D. Garciano", "Oxford University Press", 2018, "1223456", "img/book-covers/basic-cal-oxford.jpg", "eng nonfiction circulation shs");
    const pracVocab = new Book("Practical Vocabulary", "Judith N. Meyers", "LearningExpress LLC.", 2007, "1223456", "img/book-covers/prac-vocab.jpg", "eng nonfiction circulation");
    const exploringLifeSci = new Book("Exploring Life Through Science", "Jose T. Olivar II, Anna C. Morales-Ramos", "Phoenix Publishing House", 2016, "1223456", "img/book-covers/exploringlife-sci.jpg", "eng nonfiction circulation shs");
    const readingWritingFirsted = new Book("Reading and Writing Skills", "Marella Theresa A. Tionson, Maxine Rafaella C. Rodriguez", "Rex Book Store", 2015, "1223456", "img/book-covers/reading-writing-firsted.jpg", "eng nonfiction circulation shs");
    const writingGrammar = new Book("Writing Grammar", "Joyce Armstrong Carroll, Edward E. Wilson, Gary Forlini", "Prentice Hall", 2000, "1223456", "img/book-covers/writing-grammar.jpg", "eng nonfiction circulation");
    const pilEngDict = new Book("Pilipino-English Dictionary (Abridged Edition)", "Vito C. Santos", "Anvil Publishing Inc.", 2006, "1223456", "img/book-covers/pil-eng-dict.jpg", "eng fil nonfiction reference");
    const biyakBato = new Book("The Pact of Biyak na Bato and Ninay", "Pedro Alejandro Paterno", "National Historical Commission of the Philippines", 2004, "1223456", "img/book-covers/biyak-bato.jpg", "fil nonfiction circulation");

    class BooksList {
        constructor() {
            this.array = [];
        }

        // Add an element to the end of the list
        add(element) {
            this.array.push(element);

            this.array.forEach(existingBook => {
                existingBook.bookIndex = booksList.indexOf(existingBook);
            });
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
        const bookDiv = window.document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.setAttribute("data-index", existingBook.bookIndex);

        const bookCover = window.document.createElement("img");
        bookCover.src = existingBook.coverImgSrc;
        bookCover.alt = existingBook.title;
        bookCover.classList.add("book-cover");
        bookDiv.appendChild(bookCover);

        const bookTitle = window.document.createElement("h4");
        bookTitle.classList.add("book-h4h5");
        bookTitle.textContent = existingBook.title;
        bookDiv.appendChild(bookTitle);

        const bookAuthor = window.document.createElement("h5");
        bookAuthor.classList.add("book-h4h5");
        bookAuthor.textContent = existingBook.author;
        bookDiv.appendChild(bookAuthor);

        if (shelf != null) {
            shelf.appendChild(bookDiv);
        }

        bookDiv.addEventListener("click", function () {
            displayBooks(existingBook);
        });

    });

    function displayBooks(bookObject) {
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

        const dispalyBookCover = document.createElement("img");
        dispalyBookCover.src = bookObject.coverImgSrc;
        dispalyBookCover.alt = bookObject.title;
        dispalyBookCover.classList.add("displaybook-cover");
        flexWrapper.appendChild(dispalyBookCover);

        const bookInfoContainer = document.createElement("div");
        bookInfoContainer.classList.add("book-info-container");
        flexWrapper.appendChild(bookInfoContainer);

        const displayBookTitle = document.createElement("h2");
        displayBookTitle.textContent = `\"${bookObject.title}\"`;
        bookInfoContainer.appendChild(displayBookTitle);

        const displayBookAuth = document.createElement("h3");
        displayBookAuth.textContent = `Author/s: ${bookObject.author}`;
        bookInfoContainer.appendChild(displayBookAuth);

        const displayBookPublisher = document.createElement("h3");
        displayBookPublisher.textContent = `Publisher: ${bookObject.publisher}`;
        bookInfoContainer.appendChild(displayBookPublisher);

        const displayBookYear = document.createElement("h3");
        displayBookYear.textContent = `Year Published: ${bookObject.publishYear}`;
        bookInfoContainer.appendChild(displayBookYear);

        const bookIsbn = document.createElement("h3");
        if (bookObject.isbn.length > 10) {
            bookIsbn.textContent = `ISBN-13: ${bookObject.isbn}`;
        } else {
            bookIsbn.textContent = `ISBN-10: ${bookObject.isbn}`;
        }
        bookInfoContainer.appendChild(bookIsbn);

        const buttonContainer = document.createElement("div");
        bookInfoContainer.appendChild(buttonContainer);

        const borrowBookBtn = document.createElement("button");
        borrowBookBtn.textContent = "BORROW";
        borrowBookBtn.style.marginTop = "30px";
        borrowBookBtn.classList.add("displaybook-btn-styling");
        buttonContainer.appendChild(borrowBookBtn);

        const returnBookBtn = document.createElement("button");
        returnBookBtn.textContent = "RETURN";
        returnBookBtn.style.marginLeft = "20px";
        returnBookBtn.classList.add("displaybook-btn-styling");
        buttonContainer.appendChild(returnBookBtn);

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "CLOSE";
        closeBtn.style.marginTop = "20px";
        closeBtn.classList.add("displaybook-btn-styling");
        bookInfoContainer.appendChild(closeBtn);

        const borrowBook = document.createElement("div");

        const borrowForm = document.createElement("div");
        const studentNumInput = document.createElement("input");
        studentNumInput.style.Width = "400px";
        studentNumInput.placeholder = "Student Number";
        const bookIsbnInput = document.createElement("input");
        bookIsbnInput.style.width = "400px";
        bookIsbnInput.placeholder = "Book ISBN-13 or ISBN-10";
        const borrowingTxt = document.createElement("p");
        const borrowedOnTxt = document.createElement("p");
        const returnOnTxt = document.createElement("p");
        const confirmBtn = document.createElement("button");
        confirmBtn.textContent = "Confirm";
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";

        const instructionsContainer = document.createElement("div");
        instructionsContainer.style.paddingRight = "20px";
        const instructions = document.createElement("h1");
        instructions.textContent = "Instructions";
        const first = document.createElement("h2");
        first.textContent = "1. Scan the ISBN of the book or tap on it in the kiosk";
        const second = document.createElement("h2");
        second.textContent = "2. Tap on the \"BORROW\" button";
        const third = document.createElement("h2");
        third.textContent = "3. Enter your student number and tap confirm to finalize";
        const fourth = document.createElement("h2");
        fourth.textContent = "4. An email will be sent to your school email about the borrowed book and when to return it before a certain date";
        const fifth = document.createElement("h2");
        fifth.textContent = "5. Enjoy your book";

        borrowBookBtn.addEventListener("click", function () {
            blurBackground.style.zIndex = "4";

            borrowBook.style.animation = "slideDown 0.5s 1";

            borrowBook.classList.add("borrow-book");
            borrowForm.classList.add("borrow-info-container");

            first.classList.add("h2-styling");
            second.classList.add("h2-styling");
            third.classList.add("h2-styling");
            fourth.classList.add("h2-styling");
            fifth.classList.add("h2-styling");
            second.classList.add("h2-styling");
            studentNumInput.classList.add("input-styling");
            borrowingTxt.classList.add("p-styling");
            borrowedOnTxt.classList.add("p-styling");
            returnOnTxt.classList.add("p-styling");
            confirmBtn.classList.add("displaybook-btn-styling");
            cancelBtn.classList.add("displaybook-btn-styling");

            window.parent.document.body.appendChild(borrowBook);

            borrowBook.appendChild(borrowForm);

            borrowForm.appendChild(studentNumInput);
            borrowForm.appendChild(borrowingTxt);
            borrowForm.appendChild(borrowedOnTxt);
            borrowForm.appendChild(returnOnTxt);
            borrowForm.appendChild(confirmBtn);
            borrowForm.appendChild(cancelBtn);

            studentNumInput.focus();

            borrowingTxt.textContent = `Borrowing: ${bookObject.title}`;
            borrowedOnTxt.textContent = `Borrowed On: ${currentDate.toLocaleString()}`;
            let returnDate = new Date();
            returnDate.setDate(currentDate.getDate() + 7);
            returnDate.setHours(-6, 0, 0);
            returnOnTxt.textContent = `Return Before: ${returnDate.toLocaleString()}`;

            borrowBook.appendChild(instructionsContainer);
            instructionsContainer.appendChild(instructions);
            instructionsContainer.appendChild(first);
            instructionsContainer.appendChild(second);
            instructionsContainer.appendChild(third);
            instructionsContainer.appendChild(fourth);
            instructionsContainer.appendChild(fifth);

        });

        returnBookBtn.addEventListener("click", function () {
            blurBackground.style.zIndex = "4";

            borrowBook.style.animation = "slideDown 0.5s 1";

            borrowBook.classList.add("borrow-book");
            borrowForm.classList.add("borrow-info-container");

            first.classList.add("h2-styling");
            second.classList.add("h2-styling");
            third.classList.add("h2-styling");
            fourth.classList.add("h2-styling");
            fifth.classList.add("h2-styling");
            second.classList.add("h2-styling");
            studentNumInput.classList.add("input-styling");
            borrowingTxt.classList.add("p-styling");
            borrowedOnTxt.classList.add("p-styling");
            returnOnTxt.classList.add("p-styling");
            confirmBtn.classList.add("displaybook-btn-styling");
            cancelBtn.classList.add("displaybook-btn-styling");

            window.parent.document.body.appendChild(borrowBook);

            borrowBook.appendChild(borrowForm);

            borrowForm.appendChild(studentNumInput);
            borrowForm.appendChild(borrowingTxt);
            borrowForm.appendChild(borrowedOnTxt);
            borrowForm.appendChild(returnOnTxt);
            borrowForm.appendChild(confirmBtn);
            borrowForm.appendChild(cancelBtn);

            studentNumInput.focus();

            borrowingTxt.textContent = `Returning: ${bookObject.title}`;
            borrowedOnTxt.textContent = `Borrowed On: ${currentDate.toLocaleString()}`;
            let returnDate = new Date();
            returnDate.setDate(currentDate.getDate() + 7);
            returnDate.setHours(-6, 0, 0);
            returnOnTxt.textContent = `Return Before: ${returnDate.toLocaleString()}`;

            second.textContent = "2. Tap on the \"RETURN\" button";
            fourth.textContent = "4. Make sure the book is undamged, else, please inform the librarian";
            fifth.textContent = "5. Thank you for using the library kiosk";

            borrowBook.appendChild(instructionsContainer);
            instructionsContainer.appendChild(instructions);
            instructionsContainer.appendChild(first);
            instructionsContainer.appendChild(second);
            instructionsContainer.appendChild(third);
            instructionsContainer.appendChild(fourth);
            instructionsContainer.appendChild(fifth);
        });

        cancelBtn.addEventListener("click", function () {
            borrowBook.style.animation = "slideUp 0.5s 1";
            setTimeout(() => {
                blurBackground.style.zIndex = "2";
                borrowBook.remove();
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

    function applyFilter(filter) {
        booksList.forEach(book => {
            if (shelf != null) {
                const bookDivSelector = shelf.querySelector(`[data-index="${book.bookIndex}"]`);
                if (!book.category.includes(filter)) {
                    bookDivSelector.style.display = "none"; // Hide the book
                }
            }
        });
    }

    function applyDateFilter() {
        booksList.forEach(book => {
            if (shelf != null && fromInput != null && toInput != null) {
                const bookDivSelector = shelf.querySelector(`[data-index="${book.bookIndex}"]`);
                
                if (fromInput.value.trim() != "" || toInput.value.trim() != "") {
                    const fromYear = parseInt(fromInput.value.trim());
                    const toYear = parseInt(toInput.value.trim());

                    const publishYear = parseInt(book.publishYear);

                    if (publishYear < fromYear || publishYear > toYear) {
                        bookDivSelector.style.display = "none";
                    }
                }
            } 
        });
    }

    if (applyBtn != null) {
        applyBtn.addEventListener("click", function () {

            if (document.querySelector(".status-txt")) {
                document.querySelector(".status-txt").textContent = "Filter Results";
            }

            if (fictChbx.checked) {
                applyFilter("fcn");
            }
            if (nonficChbx.checked) {
                applyFilter("nonfiction");
            }
            if (circulChbx.checked) {
                applyFilter("circulation");
            }
            if (referChbx.checked) {
                applyFilter("reference");
            }
            if (shsChbx.checked) {
                applyFilter("shs");
            }
            if (engChbx.checked) {
                applyFilter("eng");
            }
            if (filChbx.checked) {
                applyFilter("fil");
            }

            applyDateFilter();

        });
    }

    if (clearBtn != null) {
        clearBtn.addEventListener("click", function () {
            location.reload();
        });
    }



    searchBar.addEventListener("input", e => {
        const searchBarInput = e.target.value;
        booksList.forEach(book => {
            if (shelf != null) {
                const bookDivSelector = shelf.querySelector(`[data-index="${book.bookIndex}"]`);
                const isVisible = book.title.includes(searchBarInput);
                bookDivSelector.classList.toggle("hide", !isVisible);
            }
        });
    });

    if (scanIc != null) {
        scanIc.addEventListener("click", function () {
            const displayScanDiv = document.createElement("div");
            displayScanDiv.classList.add("scan-barcode");
            displayScanDiv.style.animation = "popIn 0.5s";
            window.document.body.appendChild(displayScanDiv);

            const blurBackground = document.createElement("div");
            blurBackground.classList.add("blur-bg");
            window.document.body.appendChild(blurBackground);

            const scanDirections = document.createElement("h3");
            scanDirections.textContent = "Scan the ISBN of the book using the barcode scanner";
            scanDirections.style.fontSize = "2.5rem";
            scanDirections.style.textAlign = "center";
            displayScanDiv.appendChild(scanDirections);

            const scannerInput = document.createElement("input");
            scannerInput.style.opacity = "1";
            displayScanDiv.appendChild(scannerInput);
            setInterval(() => {
                scannerInput.focus();
            }, 500);

            //9789710639441
            scannerInput.addEventListener("input", e => {
                booksList.forEach(book => {
                        
                    if (e.target.value === book.isbn) {
                        displayScanDiv.style.animation = "popInReverse 0.5s 1";
                        displayBooks(book);
    
                        blurBackground.remove();
                        setTimeout(() => {
                            displayScanDiv.remove();
                        }, 500);
                    }
                });
            });
            

            const closeBtnScan = document.createElement("button");
            closeBtnScan.classList.add("displaybook-btn-styling");
            closeBtnScan.textContent = "CLOSE";
            displayScanDiv.appendChild(closeBtnScan);

            closeBtnScan.addEventListener("click", function () {
                displayScanDiv.style.animation = "popInReverse 0.5s 1";
                blurBackground.remove();
                setTimeout(() => {
                    displayScanDiv.remove();
                }, 500);

            });

        });
    }

});

