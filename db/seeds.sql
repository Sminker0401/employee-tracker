INSERT INTO department  (name)
VALUES  ( "Engineering"),
        ( "Finance"),
        ( "Legal" ),
        ( "Sales" );

INSERT INTO  role (department_id, title, salary)
VALUES  ( 4, "sales lead", 100000),
        ( 4, "salesperson", 80000),
        ( 1, "lead engineer", 150000),
        ( 1, "software engineer", 120000),
        ( 2, "account manager", 160000),
        ( 2, "accountant", 125000),
        ( 3, "legal team lead", 250000),
        ( 3, "lawyer", 190000);

INSERT INTO employee  (role_id, first_name, last_name)
VALUES  
        (4, "John", "Doe"),
        (4, "Olivia", "Johnson"),
        (1, "Stephanie", "Minker"),
        (1, "Gina Lipka", "Smart"),
        (2, "Sarah", "Arnce"),
        (2, "Mike", "Tessing"),
        (3, "Chris", "Dirosa"),
        (3, "Lyssa", "Gower");
