import { Router } from 'express';

// Employee
import { createEmployees } from './app/useCases/Employees/createEmployee';
import { listEmployees } from './app/useCases/Employees/listEmployees';

// Client
import { createClient } from './app/useCases/Clients/createClient';
import { listClients } from './app/useCases/Clients/listClients';

export const router = Router();

// Create employees
router.post('/employees', createEmployees);
// List employees
router.get('/employees', listEmployees);
// Update employees
router.patch('employees/:employeeId', );
// Delete employees
router.delete('employees/:employeeId', );

// Create machines
router.post('/machines', );
// List machines
router.get('/machines', );
// Update machines
router.patch('machines/:machineId', );
// Delete machines
router.delete('machines/:machineId', );

// Create orders
router.post('/orders', );
// List orders
router.get('/orders', );
// Update orders
router.patch('orders/:orderId', );
// Cancel orders
router.delete('orders/:orderId', );

// Create clients
router.post('/clients', createClient);
// List clients
router.get('/clients', listClients);
// Update clients
router.patch('clients/:clientId', );

// Create items
router.post('/items', );
// List items
router.get('/items', );
// Update items
router.patch('items/:itemId', );
// Delete items
router.delete('items/:itemId', );

// Create Production
router.post('/productions', );
// List Production
router.get('/productions', );
// Update Production
router.patch('productions/:productionId', );
// Delete Production
router.delete('productions/:productionId', );
