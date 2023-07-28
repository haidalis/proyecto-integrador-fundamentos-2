Algoritmo calc_ingresos_mensuales
	Escribir 'Calculo de Ventas de Fin de Mes'
	bono_ventas <- 200000
	Escribir 'Digite el valor de las ventas de los martillos:'
	Leer ventas_martillos
	Escribir 'Digite el valor de las ventas de las puntillas:'
	Leer ventas_puntillas
	total_ventas <- ventas_martillos+ventas_puntillas
	Si total_ventas<=200000 Entonces
		Escribir 'No cumpliste con las ventas mínimas del mes'
	SiNo
		Escribir 'Total de ventas'
		Si total_ventas>999999 Entonces
			total_ventas <- total_ventas+bono_ventas
			Escribir 'Superaste la meta ventas del mes, y tienes una bonificacion de ', bono_ventas
		FinSi
	FinSi
	Escribir 'Las ventas totales entre martillos y puntillas fueron de $', total_ventas
FinAlgoritmo
