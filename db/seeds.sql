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

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES  
        (1, "John", "Doe", null),
        (2, "Olivia", "Johnson", 1),
        (3, "Stephanie", "Minker", null),
        (4, "Gina Lipka", "Smart", 3),
        (5, "Sarah", "Arnce", null),
        (6, "Mike", "Tessing", 5),
        (7, "Chris", "Dirosa", null),
        (8, "Lyssa", "Gower", 7);
