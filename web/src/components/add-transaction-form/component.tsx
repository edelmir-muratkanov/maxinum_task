import { cn } from '@/lib/cn'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useAddTransactionForm } from './hook'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'
import { format } from 'date-fns'
import { Textarea } from '../ui/textarea'

export function AddTransactionForm() {
  const { onSubmit, form, loading } = useAddTransactionForm()
  return (
    <Form {...form}>
      <form
        onSubmit={event => {
          event.preventDefault()
          onSubmit()
        }}
        className='space-y-4'
      >
        <FormField
          control={form.control}
          name='categoryName'
          render={({ field }) => (
            <FormItem>
              <Label className='sr-only' htmlFor='categoryName'>
                Название категории
              </Label>
              <FormControl>
                <Input
                  id='categoryName'
                  placeholder='Введите название категории'
                  autoCapitalize='none'
                  autoCorrect='off'
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='amount'
          render={({ field }) => (
            <FormItem>
              <Label className='sr-only' htmlFor='amount'>
                Сумма
              </Label>
              <FormControl>
                <Input
                  type='number'
                  id='amount'
                  placeholder='Введите сумму'
                  disabled={loading}
                  {...field}
                  onChange={e => field.onChange(+e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='date'
          render={({ field }) => (
            <FormItem>
              <Label className='sr-only' htmlFor='amount'>
                Сумма
              </Label>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[280px] justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='comment'
          render={({ field }) => (
            <FormItem>
              <Label className='sr-only' htmlFor='amount'>
                Сумма
              </Label>
              <FormControl>
                <Textarea disabled={loading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full' disabled={loading}>
          <span>Создать</span>
        </Button>
      </form>
    </Form>
  )
}
