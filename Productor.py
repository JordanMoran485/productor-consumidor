import threading
import queue
import time
import random


cola = queue.Queue()


def productor():
    for i in range(10):
        item = f"item-{i}"
        print(f"🛠️ Productor produce: {item}")
        cola.put(item)  
        time.sleep(random.uniform(0.1, 0.5))
    cola.put(None)  


def consumidor():
    while True:
        item = cola.get()  
        if item is None:
            break 
        print(f"✅Consumidor consume: {item}")
        time.sleep(0.5)

start_time = time.time()


hilo_productor = threading.Thread(target=productor)
hilo_consumidor = threading.Thread(target=consumidor)


hilo_productor.start()
hilo_consumidor.start()

hilo_productor.join()
hilo_consumidor.join()


print(" Procesamiento terminado.")
end_time = time.time()
print(f'🕒 Tiempo total: {end_time - start_time:.2f} segundos')
