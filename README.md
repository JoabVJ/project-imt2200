# Enfermedades Respiratorias en Urgencias: Pre y Post COVID-19

La pandemia de COVID-19 produjo un cambio radical en los patrones de consulta por enfermedades respiratorias en los servicios de urgencia.
Antes del 2020, la frecuencia con la que se presentaban virus respiratorios como influenza, virus sincicial y adenovirus determinaba los flujos de pacientes.
La motivación de este proyecto es analizar si, efectivamente, la pandemia alteró la cantidad de atenciones por enfermedades respiratorias en urgencias y si estas modificaciones se han mantenido en los años posteriores al confinamiento.

**Integrantes:** 
- Santiago González
- Fernanda Le Roy
- Joab Vivanco
___
### Pregunta Principal
> **¿Se ha observado un aumento de las enfermedades respiratorias que motivan consultas en urgencias tras la pandemia, en comparación con el período previo al COVID-19?**

#### Preguntas Secundarias

1. ¿Cómo influye el **tipo de patología** en la clasificación del nivel de urgencia (leve, moderado, grave)?  
2. ¿Existen **regiones o comunas** con una mayor incidencia de enfermedades respiratorias?  
3. ¿Qué **patologías respiratorias** han sido más prevalentes en la última década y cómo ha cambiado su distribución a lo largo de los años?  
4. ¿Cuál es la **relación entre los rangos etarios** y la prevalencia de enfermedades respiratorias, y qué patologías son más comunes en cada grupo de edad?  
___

### Pasos a Realizar
Tomaremos datos provenientes de la Plataforma de Datos Abiertos del Gobierno de Chile, específicamente del conjunto “Atenciones de Urgencia por Causas Respiratorias” (https://datos.gob.cl/dataset/atenciones-de-urgencia-causas-respiratorias). Luego, limpiarla y filtrarla de tal forma que dejemos todo lo que pueda ser relevante para contestar las preguntas a continuación, además de cambiar los tipos de datos para que sean más trabajables.
Por ejemplo, luego queremos explorar qué patologías afectan con mayor frecuencia a cada grupo etario, región y nivel de gravedad, para ello filtraríamos las columnas columnas que se relacionan con rango etario y graficando para notar cómo varía la cantidad total por rango etario y causas de contagio/hospitalización. Así con cada objetivo y pregunta, de esta manera, en conjunto contribuyen a entregar una visión integral que respalda la respuesta a la pregunta de investigación principal. 
Además corroboramos que se pueda predecir o utilizar algún modelo para mejorar el análisis, y además contribuir a mejorar la conclusión de la pregunta principal. Entonces, entrenamos un modelo que analice según la estación, para que haga una estimación en comparación de los datos reales cómo se comporta la cantidad de personas que ingresan e ingresarían.

### Entrega Final
Consideramos que era mejor usar el metodo de Calificacion ya que se acomoda mas a nuestras variables.
Pese a que el modelo presenta un aumento del error en ciertos contextos(semanas o regiones) debido a "spikes" en la demanda, pero eso es lo esperable ya que el modelo no puede manejar bien esos contextos.

Con la diferencia entre el MAE y el RMSE podemos contestar nuestra pregunta de que la volatilidad de la demanda aumento despues de la pandemia, lo que genera los "spikes" que generan los problemas del modelo, lo que justifica que los patrones de demanda se modificaran post pandemia

### Sesgos del Modelo
Por lo que podemos ver en los datos podemos ver que los mas presentes son infantes hasta los 5 años y adultos mayores desde los 65, como el modelo no mide esto puede ocurrir que prediga un "spike" segun semana, estacion, etc pero no va a ser capaz de identificar que el contexto de la gente afecta ya sea negativa o positivamente, esto tambien sucede con las regiones, ya que hay mucho contexto que no se toma en cuenta y que puede ser determinante 

### Citas
[1] Chen, Y., Klein, S. L., Garibaldi, B. T., Li, H., Wu, C., Osevala, N. M., Li, T., Margolick, J. B., Pawelec, G. y Leng, S. X. (2021). Envejecimiento en COVID-19: vulnerabilidad, inmunidad e intervención. Revisiones de investigación sobre el envejecimiento, 65, 101205. https://pubmed.ncbi.nlm.nih.gov/33137510/

[2] Zuo, Z., Yang, C., Ye, F., Wang, M., Wu, J., Tao, C., Xun, Y., Li, Z., Liu, S., Huang, J., & Xu, A. (2023). Tendencias de las enfermedades respiratorias antes y después de la pandemia de COVID-19 en China de 2010 a 2021. Salud pública de BMC, 23(1), 217. https://pubmed.ncbi.nlm.nih.gov/36721137/

[3] https://github.com/CSSEGISandData/COVID-19

[4] https://ourworldindata.org/covid-cases