import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Checkbox } from '@/components/ui/checkbox';



function App1() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="mt-2 flex items-left justify-center bg-indigo-185 h-15">
              <Button className="size-full bg-sky-500/100">
                Добавить задачу
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-left">
                  Название
                </Label>
                <Input id="name" className="col-span-3 h-17" />
              </div>
              <div className="grid grid-cols-4 gap-4 ">
                <Label htmlFor="username" className="text-left">
                  Описание
                </Label>
                <Input
                  id="username"
                  className="col-span-3 h-48 text-clip overflow-hidden resize-y rounded-md"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleClick}>Создать</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-10">
        <Input id="filter" placeholder="Поиск по названию" className="w-19" />

        <Table className="mt-4">
          <TableCaption>0 из 10 выбрано</TableCaption>

          <TableHeader>
            <TableRow>
              <Checkbox className="mt-4" />
              <TableHead className="w-[100px]">Задача</TableHead>
              <TableHead>Название</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Приоритет</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <Checkbox className="mt-4" />
              <TableCell className="font-medium">INV001</TableCell>
              <div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                  Тег проекта
                </div>
                <TableCell>Можно кнопочку пошире??</TableCell>
              </div>
              <TableCell>Done</TableCell>
              <TableCell className="text-right">High</TableCell>
            </TableRow>

            <TableRow>
              <Checkbox className="mt-4" />
              <TableCell className="font-medium">INV002</TableCell>
              <div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                  Тег проекта
                </div>
                <TableCell>Ничего не получается</TableCell>
              </div>
              <TableCell>In Progress</TableCell>
              <TableCell className="text-right">Medium</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" href="#" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" href="#" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
export default App1;
