INSERT INTO department  (name)
VALUES  ( "Egineering"),
        ( "Finance"),
        ( "Legal" ),
        ( "Sales" );

INSERT INTO  role (department_id, title, salary)
VALUES  ( 004, "sales lead", 100000),
        ( 004, "salesperson", 80000),
        ( 001, "lead engineer", 150000),
        ( 001, "software engineer", 120000),
        ( 002, "account manager", 160000),
        ( 002, "accountant", 125000),
        ( 003, "legal team lead", 250000),
        ( 003, "lawyer", 190000);

INSERT INTO employee (role_id, first_name, last_name)
VALUES  
       (004, "John", "Doe"),
        (004, "Olivia", "Johnson"),
        (001, "Stephanie", "Minker"),
        (001, "Gina Lipka", "Smart"),
        (002, "Sarah", "Arnce"),
        (002, "Mike", "Tessing"),
        (003, "Chris", "Dirosa"),
        (003, "Lyssa", "Gower");
