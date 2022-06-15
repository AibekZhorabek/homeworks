# Задания «SQL»

Для решения задач вам потребуется перейти по ссылке https://sql-academy.org/ru/sandbox. 
Там вы будете выполнять все запросы для теста. По ссылке будет доступна схема `Air travels`, в которой есть
4 таблицы: `TRIP`, `PASS_IN_TRIP`, `PASSENGER`, `COMPANY`. Ответы (SQL запросы) будет необходимо сохранить в этом файле `README`
после каждого задания.

### Задание 1.

C помощью SELECT выведите всех пассажиров, которые летят на самолете `Boeing` от компании `air_France`.
Обязательные поля для вывода: ID пассажира, Имя пассажира как `PASSENGER_NAME`, Название самолета и название компании
как `COMPANY_NAME`.

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 1 ЗАДАНИЯ ЗДЕСЬ -->
SELECT passenger.name as PASSENGER_NAME, company.name as COMPANY_NAME from passenger
join Pass_in_trip ON (passenger.id = Pass_in_trip.passenger )
join trip ON (Pass_in_trip.trip = trip.id)
join company on (trip.company = company.id)
where trip.plane = 'Boeing' and company.name = 'air_France'

### Задание 2.

C помощью SELECT выведите количество пассажиров относительно каждого полета(`Pass_in_trip.trip`).
Отсортируйте записи относительно количество пассажиров в порядке убывания(от большего к меньшему).
Обязательные поля для вывода: Номер полета и Количество пассажиров.

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 2 ЗАДАНИЯ ЗДЕСЬ -->
select trip as 'Номер полета', count(passenger.id) as 'Количество пассажиров' from trip
join Pass_in_trip on (trip.id = Pass_in_trip.trip)
join passenger on (Pass_in_trip.passenger = passenger.id)
GROUP BY trip
ORDER By count(passenger.id) DESC

### Задание 3.

С помощью SELECT выведите количество всех пассажиров из таблицы PASSENGER, имена которых начинаются с одной и той же буквы.
Отсортируйте записи по убыванию(от большего к меньшему) относительно количества пассажиров. Показывать только те записи,
где количество больше 1. Обязательные поля для вывода: `FIRST_CHAR`(Первая буква имени) 
и `COUNT` (Количество пассажиров, имена которых начинаются с этой буквы).

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 3 ЗАДАНИЯ ЗДЕСЬ -->
select substr(name,1, 1) as FIRST_CHAR, count(id) as COUNT
from passenger
group by substr(name, 1, 1)
having count(id) > 1
order by count(id) DESC

<!-- После выполнения всех заданий, необходимо сделать push в репозиторий и отправить ссылку на него -->
