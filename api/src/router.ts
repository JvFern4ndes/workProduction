import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

// Employee
import { createEmployees } from './app/useCases/Employees/createEmployee';
import { listEmployees } from './app/useCases/Employees/listEmployees';
import { updateEmployee } from './app/useCases/Employees/updateEmployee';
import { deleteEmployee } from './app/useCases/Employees/deleteEmployee';

// Machine
import { createMachine } from './app/useCases/Machines/createMachine';
import { listMachines } from './app/useCases/Machines/listMachines';
import { updateMachine } from './app/useCases/Machines/updateMachine';
import { deleteMachine } from './app/useCases/Machines/deleteMachine';

// Order
import { createOrder } from './app/useCases/Orders/createOrder';
import { listOrders } from './app/useCases/Orders/listOrders';
import { cancelOrder } from './app/useCases/Orders/cancelOrder';
import { changeOrderStatus } from './app/useCases/Orders/changeOrderStatus';

// Client
import { createClient } from './app/useCases/Clients/createClient';
import { listClients } from './app/useCases/Clients/listClients';
import { updateClient } from './app/useCases/Clients/updateClient';

// Item
import { createItem } from './app/useCases/Items/createItem';
import { listItems } from './app/useCases/Items/listItems';
import { updateItem } from './app/useCases/Items/updateItem';
import { deleteItem } from './app/useCases/Items/deleteItem';

// Production
import { createProduction } from './app/useCases/Productions/createProduction';
import { listProductions } from './app/useCases/Productions/listProductions';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});

// Create employees
router.post('/employees', upload.single('image'), createEmployees);
// List employees
router.get('/employees', listEmployees);
// Update employees
router.patch('/employees/:employeeId', updateEmployee);
// Delete employees
router.delete('/employees/:employeeId', deleteEmployee);

// Create machines
router.post('/machines', createMachine);
// List machines
router.get('/machines', listMachines);
// Update machines
router.patch('/machines/:machineId', updateMachine);
// Delete machines
router.delete('/machines/:machineId', deleteMachine);

// Create orders
router.post('/orders', createOrder);
// List orders
router.get('/orders', listOrders);
// Update orders
router.patch('/orders/:orderId', changeOrderStatus);
// Cancel orders
router.delete('/orders/:orderId', cancelOrder);

// Create clients
router.post('/clients', createClient);
// List clients
router.get('/clients', listClients);
// Update clients
router.patch('/clients/:clientId', updateClient);

// Create items
router.post('/items', upload.single('image'), createItem);
// List items
router.get('/items', listItems);
// Update items
router.patch('/items/:itemId', updateItem);
// Delete items
router.delete('/items/:itemId', deleteItem);

// Create Production
router.post('/productions', createProduction);
// List Production
router.get('/productions', listProductions);
// Update Production
router.patch('/productions/:productionId', );
